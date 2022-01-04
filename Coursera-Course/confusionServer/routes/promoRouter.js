const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
const Promotions = require('../models/promotions.js');

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.get( (req, res, next) => {
    Promotions.find()
    .then( (promotions) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotions);
    }, (err) => {
        next(err);
    }).catch( (err)=>{
        console.log(err);
        next(err);
    });
})

.post( (req, res, next) => {
    Promotions.create(req.body)
    .then( (promotion) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotion);
    }, (err) => { next( err ); })
    .catch( (err) => {
        console.log(err);
        next(err);
    });
})

.put( (req, res, next) => {
    res.statusCode = 403;
    res.end( 'put operation not supported on /promotions' );
})

.delete( (req, res, next) => {
    Promotions.remove()
    .then( (resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => { next( err ); })
    .catch( (err) => {
        console.log(err);
        next(err);
    });
});

promoRouter.get('/:promoId', (req, res, next) => {
    Promotions.findById(req.params.promoId)
    .then( (promotion) => {
        if( promotion != null ) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(leader);
        } else {
            err = new Error('promotion ' + req.params.promoId + 'not found');
            err.statusCode = 404;
            return next(err);
        }
    }, (err) => { next(err); })
    .catch( (err) => {
        console.log(err);
        next(err);
    });
})

.post('/:promoId', (req, res, next) => {
    res.statusCode = 403;
    res.end('Post operation not supported for the route /promotions/' + req.params.promoId);
})

.put('/:promoId', (req, res, next) => {
    Promotions.findByIdAndUpdate(req.params.promoId, { $set: req.body },
        { new: true })
    .then((promotion) => {
        if( promotion != null ) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promotion);
        } else {
            err = new Error('Promotion ' + req.params.promoId + ' not found');
            err.statusCode = 404;
            return next(err);
        }
    }, (err) => { next(err); })
    .catch((err) => {
        console.log(err);
        next(err);
    });
})

.delete('/:promoId', (req, res, next) => {
    Promotions.findByIdAndDelete(req.params.promoId)
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

module.exports = promoRouter;