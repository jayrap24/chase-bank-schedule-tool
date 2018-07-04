const express = require('express');
const app = express();

app.use(express.static('public'));


const { router: employeeRouter } = require('./employee/employee-route');
const { router: homeRouter } = require('./home/home-route');

app.use('/employee', employeeRouter);
app.use('/home', homeRouter);




const data = require('./app');

app.get("/test", (req, res) => {
    res.json(data)
    console.log("got to localhost 8080")
  });




app.listen(process.env.PORT || 8080);