var createError = require('http-errors');
var express = require('express');
const dotenv = require('dotenv').config()
var path = require('path')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport')
const session = require('express-session')
var indexRouter = require('./routes/index');
var atuhpage = require('./routes/auth');
var usersRouter = require('./routes/users');
var stories=require('./routes/stories');
const connectDB = require('./config/db')
var hbs = require('express-hbs');
const methodOverride = require('method-override')
var app = express();

// Load config
//dotenv.config({ path: './config/config.env' })

// Passport config
require('./config/passport')(passport)

connectDB()
// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,    
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())
//const port = 3001
// view engine setup
 app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth',atuhpage)
app.use('/users', usersRouter);
app.use('/stories', stories)

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
// Method override
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      let method = req.body._method
      delete req.body._method
      return method
    }
  })
)


app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})

module.exports = app;
