'use strict';

const express=require('express');
const app=express();

var betRouter = require('./controllers/bet');
var resultRouter = require('./controllers/result');
var dividendRouter = require('./controllers/dividend');
var raceRouter = require('./controllers/race');
var path = require('path');
var errorHandler = require('./middlewares/error-handler');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

//init app

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine' ,'pug');

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :false}));
app.use(expressValidator());

// Routers
app.use('', raceRouter);
app.use('', betRouter);
app.use('', resultRouter);
app.use('', dividendRouter);



//Set static path
app.use(express.static(path.join(__dirname, 'public')));


// Error Handler
app.use(errorHandler);
app.listen(
    3000,function(){
        console.log('app listening on port 3000!');
    }
);

//handle the uncaught exception
process.on('uncaughtException', function (err) {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
    console.error(err.stack);
    process.exit(1);
});