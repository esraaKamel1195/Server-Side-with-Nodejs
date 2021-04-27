const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dashRouter = require('./routes/dashRouter');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use( (req, res, next) => {
    console.log(req.header);
    res.statusCode = 200;
    res.setHeader( 'content-Type', 'text/html' );
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use('/dashes', dashRouter);

const server = http.createServer(app);

server.listen( port, hostname, ()=> {
    console.log(`Server running at http/${hostname}:${port}/`);
});
