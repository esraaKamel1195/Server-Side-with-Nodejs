import express from 'express';
import data from './data/data.json';
const app = express();
const Port = 3000;

app.listen(Port, ()=> {
    console.log(`Your server is running on port ${Port}`);
    console.log(data)
});