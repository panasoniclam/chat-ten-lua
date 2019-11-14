const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()
const session  = require('express-session')
const passport =  require('passport') ;

app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(bodyParser.json());
app.use(logger('dev'));

 
require('dotenv').config
 //connect db
mongoose.connect(
    process.env.DATABASE_URL,
    {
        useNewUrlParser:true
    },()=>console.log("connect")
)
 //session 
 app.set('trust proxy',1) // trust first proxy
 app.use((session({secret:'SCC-LamNN8'})))
 app.use("/logs",express.static('./libs/systemLogs'))
 //sesion end

const apt = require('./helper-rocket/apiRest')
app.use((req,res,next)=>{
    const err = new Error('not found');
    res.status = 404 ;
    next(err)
})
app.use((req,res,next)=>{
    const err = app.get('env')  === 'development' ? err : {}
    const status = err.status || 500;
    res.status(status).json({
        error:err.message
    })
})
module.exports = app ;
