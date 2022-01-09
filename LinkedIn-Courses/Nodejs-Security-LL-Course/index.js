import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import csrf from 'csurf';
import RateLimit from 'express-rate-limit';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb');

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

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

app.use(cookieParser());

app.use(csrf({ cookie: true }));

app.get('/', (req, res) => {
    res.send(`Node and express server is running on port ${PORT}`)
});

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);