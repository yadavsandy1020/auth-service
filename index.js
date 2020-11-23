import { getDbConnection } from "./config/db";
import express from 'express';
const bodyParser = require('body-parser');

//ENV config init..
import {config  } from "dotenv";
config()

const chalk = require('chalk');

//Load env variables
const dbURL = process.env.MONGODB_URL;
const port = process.env.PORT || 4000;
const app = express();

//Middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('API is working!..');
    return res.json({ greetings: 'API is working!' })
})

app.listen(port, () => {
    console.log(chalk.blue(`API server is running on port: ${port}`));
})

getDbConnection(dbURL).then(() => { })