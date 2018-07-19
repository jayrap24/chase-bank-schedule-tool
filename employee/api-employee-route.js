const express = require('express');
const router = express.Router();


const {Employee} = require('../models/employee-model')

router.get("/", (req, res) => {
    Employee.find().then((employees)=>{
      res.json(employees);
    })
  });


  
module.exports = {router}