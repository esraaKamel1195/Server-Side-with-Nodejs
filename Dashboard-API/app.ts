import express, { Request, Response, Application } from "express";
const app: Application = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/route');
const { Router } = require("express");

app.use((req, res, next) => {
    // req.header('Access-control-Allow-Origian', '*');
    // req.header('Access-control-Allow-headers', 'Origian, X-Requested-With, Content-Type, Accept, Authorizaton');
    next();
});
  
app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

app.get("/" ,(request: Request, response: Response) => {
    console.log(request);
    response.send("Server work");
});

/************************************ Exports **********************************/
module.exports = app;