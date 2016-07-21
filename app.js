var DocumentDBClient = require('documentdb').DocumentClient;
var config = require('./config');
var TaskList = require('./routes/tasklist');
var TaskDao = require('./models/taskDao');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
//
// var docDbClient = new DocumentDBClient(config.host, {
//     masterKey: config.authKey
// });
// var taskDao = new TaskDao(docDbClient, config.databaseId, config.collectionId);
// var taskList = new TaskList(taskDao);
// taskDao.init();
//
// app.get('/api/tasks', taskList.showTasks.bind(taskList));
// app.get('/api/gratitudes', taskList.showTasks.bind(taskList));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    // res.status(err.status || 500);
    // res.render('error', {
    //   message: err.message,
    //   error: err
    // });
    console.error(err);
  });
}

// // production error handler
// // no stacktraces leaked to user
app.use(function(err, req, res, next) {
  // res.status(err.status || 500);
  // res.render('error', {
  //   message: err.message,
  //   error: {}
  // });
  console.error(err);
});


module.exports = app;
