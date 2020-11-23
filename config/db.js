// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const dbURL = process.env.MONGODB_URL

const getDbConnection = async () => {
    try {
        await mongoose.connect(dbURL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Connected to mongodb.')
    } catch (error) {
        console.log({error})
    }
   
}

getDbConnection().then(res => {
})
