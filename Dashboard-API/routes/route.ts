const { Router } = require("express");

/******************************* initializing *********************************/
const router = Router();

/****************************** Required routes  ******************************/
const clients = require('./clients-route');
const registerations = require('./registerations-route');
const plans = require('./plans-route');
const rooms = require('./rooms-route');
const products = require('./products-route');
const users = require('./user-route');
const dashboard = require('./dashboard-route');
const faculties = require('./faculties-route');
const productsForUser = require('./user-products-route');

/************************************ Routing **********************************/
router.use('/clients', clients);
router.use('/registerations', registerations);
router.use('/plans', plans);
router.use('/rooms', rooms);
router.use('/products', products);
router.use('/users', users);
router.use('/dashboards', dashboard);
router.use('/faculties', faculties);
router.use('/productsForUser', productsForUser);

/************************************ Exports **********************************/
module.exports = router;