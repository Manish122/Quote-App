import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import Routes from './server/route.js';
const app = express(); 
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/users', Routes);

const URL = "mongodb+srv://manish:w4MbStZ24cODdDVN@cluster0.lijzk.mongodb.net/CRUDAPP?retryWrites=true&w=majority";

const PORT = process.env.PORT || '8080'; 
mongoose.connect(URL, { useNewUrlParser: true, 'useCreateIndex': true, useUnifiedTopology: true, useFindAndModify: false }).then(() => { 

    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})

