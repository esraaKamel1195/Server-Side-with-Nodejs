const express = require('express');
const bodyParser = require('body-parser');

const dashRouter = express.Router();

dashRouter.use(bodyParser.json());

dashRouter.route('/')
.all( (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get( (req, res, next) => {
    res.end( 'Will send all the dashes to you!' );
})

.post( (req, res, next) => {
    res.end( 'will add the dash: ' + req.body.name + ' with details ' + req.body.description );
})

.put( (req, res, next) => {
    res.statusCode = 403;
    res.end( 'put operation not supported on /dashes' );
})

.delete( (req, res, next) => {
    res.end( 'Deleting all dashes' );
});

module.exports = dashRouter;