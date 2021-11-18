import express from 'express';
const app = express();
const Port = 3000;

app.listen(Port, ()=>
    console.log(`Your server is running on port ${Port}`)
);