const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const { PORT, DATABASE_URL } = require('./config');
app.use(morgan('dev'))
app.use(express.static('public'));
app.use(bodyParser.json());

const { router: employeeRouter } = require('./employee/employee-route');
const { router: managerRouter } = require('./manager/manager-route');

// user page
app.use('/employee', employeeRouter);
app.use('/manager', managerRouter);

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