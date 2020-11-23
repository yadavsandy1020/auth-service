const express = require('express');
require('dotenv').config()
const db = require('./config/db')
const app = express();

const port = process.env.PORT || 4000;

app.get('/',(req, res)=>{
    console.log('API is working!..');
    return res.json({greetings: 'API is working!'})
})

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})