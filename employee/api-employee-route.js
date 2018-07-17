const express = require('express');
const router = express.Router();


const employeeData = require('./storage-data-employee');

router.get("/", (req, res) => {
    res.json(employeeData)
  });


  
module.exports = {router}