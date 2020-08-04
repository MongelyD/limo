  var express = require('express');
  var createError = require('http-errors');
  var path = require('path');
  var sassMiddleware = require('node-sass-middleware');
  var app = express();
  
  
  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
  }));
  app.use(express.static(path.join(__dirname, 'public')));
  
 
  
  /* GET home page. */
  app.get('/', function(req, res) {
    
     res.render('pages/home', {title: 'Express' });
    
  });
  
 
  
  // // catch 404 and forward to error handler
  // app.use(function(req, res, next) {
  //   next(createError(404));
  // });
  
  // // error handler
  // app.use(function(err, req, res, next) {
  //   res.render('pages/error', { title: 'Express' });
  // });
  
  app.listen(4444);