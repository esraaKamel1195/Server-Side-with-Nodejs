const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all( (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get( (req, res, next) => {
    res.end( 'Will send all the promotions to you!' );
})

.post( (req, res, next) => {
    res.end( 'will add the promotion: ' + req.body.name + ' with details ' + req.body.description );
})

.put( (req, res, next) => {
    res.statusCode = 403;
    res.end( 'put operation not supported on /promotions' );
})

.delete( (req, res, next) => {
    res.end( 'Deleting all promotions' );
});

promoRouter.get('/:promoId', (req, res, next) => {
    res.end('Will send details of the promotion ' + req.params.promoId + ' to you');
})

.post('/:promoId', (req, res, next) => {
    res.statusCode = 403;
    res.end('Post operation not supported for the route /promotions/' + req.params.promoId);
})

.put('/:promoId', (req, res, next) => {
    res.write('Updating the promotion: ' + req.params.promoId + '\n');
    res.end('Will update the promotion: ' + req.body.name + ' with details ' + req.body.description);
})

.delete('/:promoId', (req, res, next) => {
    res.end('Deleting promo: ' + req.params.promoId);
});

module.exports = promoRouter;