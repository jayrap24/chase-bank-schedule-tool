const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');


//transferred over---------------------------
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
//transferred over---------------------------

const app = express();

//transferred over---------------------------
const routes = require('./routes/index');
const users = require('./routes/users');

app.set('views', path.join(__dirname,'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
//set static folder
app.use(express.static(path.join(__dirname, 'public')));
//express session
app.use(session({
    secret: 'secret',
    saveUinitialized: true,
    resave: true
}));
//Passport init
app.use(passport.initialize());
app.use(passport.session());
//express validator (get it from github)
app.use(expressValidator({
    errorFormatter:function(param, msg, value){
        const namespace = param.split('.')
        , root = namespace.shift()
        , formParam = root;
    
    while(namespace.length){
        formParam += '[' + namspace.shift() + ']';
    }
    return {
        param: formParam,
        msg : msg,
        value : value
    };
} 
}));
//connect flash middleware
app.use(flash());
//Global Vars
app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

//Routes middleware
app.use('/', routes);
app.use('/users', users)
//transferred over---------------------------




mongoose.Promise = global.Promise;
const { PORT, DATABASE_URL } = require('./config');
app.use(morgan('dev'))
app.use(express.static('public'));
app.use(bodyParser.json());

const { router: employeeRouter } = require('./employee/employee-route');
const { router: managerRouter } = require('./manager/manager-route');
const { router: homePageRouter } = require('./homePage/homePage-route');


// user page
app.use('/employee', employeeRouter);
app.use('/manager', managerRouter);
app.use('/homePage', homePageRouter);



const { router: apiManagerRouter } = require('./manager/api-manager-route');
const { router: apiEmployeeRouter } = require('./employee/api-employee-route');

//api routers
app.use('/api/manager', apiManagerRouter);
app.use('/api/employee', apiEmployeeRouter);






let server;
function runServer(databaseUrl, port = PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
        .on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}
function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}
if (require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err));
}
module.exports = { app, runServer, closeServer };