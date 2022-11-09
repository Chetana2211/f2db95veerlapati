var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true});

var icecreams = require("./models/icecream");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var EclairsRouter = require('./routes/Eclairs');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');
var icecreamRouter = require('./routes/icecream');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Eclairs', EclairsRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);
app.use('/icecream', icecreamRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

async function recreateDB(){ 

  await icecreams.deleteMany(); 
 
  let instance1 = new 
icecreams({icecream_type:"Chocolate",  size:'large', cost:17.4}); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 
  let instance2 = new 
icecreams({icecream_type:"Strawberry",  size:'Medium', cost:10.2}); 
  instance2.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("Second object saved") 
  }); 
  let instance3 = new 
icecreams({icecream_type:"Mango",  size:'Small', cost:8.9}); 
  instance3.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("Third object saved") 
  }); 
  let instance4 = new 
icecreams({icecream_type:"Vanila",  size:'large', cost:23.4}); 
  instance4.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("Fourth object saved") 
  }); 
} 
 
let reseed = true; 
if (reseed) { recreateDB();} 


module.exports = app;
