const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
const Leaders = require('../models/leaders');
const authenticate = require('../authenticate');

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.get( (req, res, next) => {
    Leaders.find({})
    .then( (leaders)=> {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(leaders);
    }, (err) => {
        next(err);
    }).catch( (err) => {
        console.log(err);
        next(err);
    });
})

.post( authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Leaders.create(req.body)
    .then((leader) => {
        console.log('Leader created', leader);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(leader);
    }, (err) => { next(err); })
    .catch((err) => {
        console.log(err);
        next(err);
    });
})

.put( authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end( 'put operation not supported on /leaders' );
})

.delete( authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Leaders.remove()
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'aplication/json');
        res.json(resp);
    }, (err) => { next(err); })
    .catch((err) => {
        console.log(err);
        next(err);
    });
});

leaderRouter.get('/:leaderId', (req, res, next) => {
    Leaders.findById(req.params.leaderId)
    .then( (leader) => {
        if( leader != null ) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(leader);
        } else {
            err = new Error('Leader ' + req.params.leaderId + 'not found');
            err.statusCode = 404;
            return next(err);
        }
    }, (err) => { next(err); })
    .catch( (err) => {
        console.log(err);
        next(err);
    });
})

.post('/:leaderId', authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('Post operation not supported for the route /leaders/' + req.params.leaderId);
})

.put('/:leaderId', authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Leaders.findByIdAndUpdate(req.params.leaderId, { $set: req.body },
        { new: true })
    .then((leader) => {
        if( leader != null ) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(leader);
        } else {
            err = new Error('Leader ' + req.params.leaderId + ' not found');
            err.statusCode = 404;
            return next(err);
        }
    }, (err) => { next(err); })
    .catch((err) => {
        console.log(err);
        next(err);
    });
})

.delete('/:leaderId', authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Leaders.findByIdAndDelete(req.params.leaderId)
    .then( (resp) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json(resp);
    }, (err) => { next(err); })
    .catch( (err) => {
        console.log(err);
        next(err);
    });
});

module.exports = leaderRouter;
