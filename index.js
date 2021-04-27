const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
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

app.all('/dashes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/dashes', (req, res, next) => {
    res.end( 'Will send all the dashes to you!' );
});

app.post('/dashes', (req, res, next) => {
    res.end( 'will add the dash: ' + req.body.name + ' with details ' + req.body.description );
});

app.put('/dashes', (req, res, next) => {
    res.statusCode = 403;
    res.end( 'put operation not supported on /dashes' );
});

app.delete('/dashes', (req, res, next) => {
    res.end( 'Deleting all dashes' );
});

app.get('/dashes/:dashId', (req, res, next) => {
    res.end('Will send details of the dashe ' + req.params.dashId + ' to you');
});

app.post('/dashes/:dashId', (req, res, next) => {
    res.statusCode = 403;
    res.end('Post operation not supported for the route /dashes/' + req.params.dashId);
});

app.put('/dashes/:dashId', (req, res, next) => {
    res.write('Updating the dash: ' + req.params.dashId + '/n');
    res.end('Will update the dash: ' + req.body.name + ' with details ' + req.body.description);
});

app.delete('/dashes/:dashId', (req, res, next) => {
    res.end('Deleting dash: ' + req.params.dashId);
});

const server = http.createServer(app);

server.listen( port, hostname, ()=> {
    console.log(`Server running at http/${hostname}:${port}/`);
});
