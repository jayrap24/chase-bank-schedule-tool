const express = require('express');
const router = express.Router();


const employeeData = require('./employee-data');

router.get("/", (req, res) => {
    res.sendFile(__dirname + '/employee.html');
    console.log("got to localhost 8080");
  });

router.get("/data", (req, res) => {
    res.json(employeeData);
    console.log("got to localhost 8080");
  });




module.exports = {router}