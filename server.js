const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

mongoose.Promise = global.Promise;
const { PORT, DATABASE_URL } = require('./config');
app.use(morgan('dev'))
app.use(express.static('public'));
app.use(bodyParser.json());

const { router: employeeRouter } = require('./employee/employee-route');
const { router: managerRouter } = require('./manager/manager-route');
const { router: homePageRouter } = require('./homePage/homePage-route');
const { router: signInSignUpRouter } = require('./signInSignUp/signInSignUp-route');

// user page
app.use('/employee', employeeRouter);
app.use('/manager', managerRouter);
app.use('/homePage', homePageRouter);
app.use('/signInSignUp', signInSignUpRouter);


const { router: apiManagerRouter } = require('./manager/api-manager-route');
const { router: apiEmployeeRouter } = require('./employee/api-employee-route');

//api routers
app.use('/api/manager', apiManagerRouter);
app.use('/api/employee', apiEmployeeRouter);


//JWT Authentication

const { router: usersRouter } = require('./users');
const { router: authRouter, localStrategy, jwtStrategy } = require('./auth');

passport.use(localStrategy);
passport.use(jwtStrategy);

app.use('/api/users/', usersRouter);
app.use('/api/auth/', authRouter);

const jwtAuth = passport.authenticate('jwt', { session: false });

// A protected endpoint which needs a valid JWT to access it
app.get('/api/protected', jwtAuth, (req, res) => {
  return res.json({
    data: 'rosebud'
  });
});



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