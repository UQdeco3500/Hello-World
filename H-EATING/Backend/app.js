var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var getUserApi = require('./apis/getuser');
var loginApi = require('./apis/login');
var getEventsApi = require('./apis/events');
var getFollowed = require('./apis/getfollowed');
var getNotification = require('./apis/getnotification');
var registerApi = require('./apis/register');
let getRestaurantApi = require('./apis/getrestaurant');
let communityApi = require('./apis/community');
let chatroom = require('./apis/chatroom');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api/',getUserApi);
app.use('/api/',loginApi);
app.use('/api/',getEventsApi);
app.use('/api/',getFollowed);
app.use('/api/',getNotification);
app.use('/api/',registerApi);
app.use('/api/',getRestaurantApi);
app.use('/api/',communityApi);
app.use('/api/',chatroom);

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

module.exports = app;
