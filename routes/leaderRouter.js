const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all( (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get( (req, res, next) => {
    res.end( 'Will send all the leaders to you!' );
})

.post( (req, res, next) => {
    res.end( 'will add the leader: ' + req.body.name );
})

.put( (req, res, next) => {
    res.statusCode = 403;
    res.end( 'put operation not supported on /leaders' );
})

.delete( (req, res, next) => {
    res.end( 'Deleting all leaders' );
});

leaderRouter.get('/:leaderId', (req, res, next) => {
    res.end('Will send details of the leader ' + req.params.leaderId + ' to you');
})

.post('/:leaderId', (req, res, next) => {
    res.statusCode = 403;
    res.end('Post operation not supported for the route /leaders/' + req.params.leaderId);
})

.put('/:leaderId', (req, res, next) => {
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.body.name );
})

.delete('/:leaderId', (req, res, next) => {
    res.end('Deleting leader: ' + req.params.leaderId );
});

module.exports = leaderRouter;
