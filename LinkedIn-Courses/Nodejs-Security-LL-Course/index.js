require('./src/config/database').connect();
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import csrf from 'csurf';
import RateLimit from 'express-rate-limit';
import jsonwebtoken from 'jsonwebtoken';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(cookieParser());

// app.use(csrf({ cookie: true }));

// serving static files
app.use(express.static('public'));

// helmet setup
app.use(helmet());

// use express rate limit against DOS attacks
const limiter = RateLimit({
    windowMs: 10*60*1000, // 10 minites
    max: 100, // limit of number of request per IP
    delayMs: 0 // disaples delays
});

app.use(limiter);

routes(app);

// jwt setup 
app.use((req, res, next) => {
    if( req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify( req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err, decode) => {
            if (err) {
                req.user = undefined;
            } else {
                req.user = decode;
            }
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});

app.get('/', (req, res) => {
    // console.log(req.csrfToken());
    res.send(`Node and express server is running on port ${PORT}`)
});

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);