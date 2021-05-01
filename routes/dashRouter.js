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

dashRouter.get('/:dashId', (req, res, next) => {
    res.end('Will send details of the dashe ' + req.params.dashId + ' to you');
})

.post('/:dashId', (req, res, next) => {
    res.statusCode = 403;
    res.end('Post operation not supported for the route /dashes/' + req.params.dashId);
})

.put('/:dashId', (req, res, next) => {
    res.write('Updating the dash: ' + req.params.dashId + '/n');
    res.end('Will update the dash: ' + req.body.name + ' with details ' + req.body.description);
})

.delete('/:dashId', (req, res, next) => {
    res.end('Deleting dash: ' + req.params.dashId);
});

module.exports = dashRouter;