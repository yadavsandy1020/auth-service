import mongoose from 'mongoose';
const chalk = require('chalk');
export const getDbConnection = async (dbURL) => {
    console.log(chalk.yellow('Initiating connection with db....'))
    try {
         await mongoose.connect(dbURL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log(chalk.green('Connected to mongodb.'))
    } catch (error) {
        console.log({error})
    }
   
}
