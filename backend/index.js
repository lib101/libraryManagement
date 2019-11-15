const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//import routes
const Route  = require('./routes/Routes');


dotenv.config();





//connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser: true, useUnifiedTopology: true },
    ()=>console.log('Connected to db')
);

//Middleware
app.use(express.json());
//route middlewares
app.use('/',Route);

app.listen(3001,()=> console.log('Server Up and Running'))


