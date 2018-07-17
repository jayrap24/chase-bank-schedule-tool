const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


const employeeData = require('./storage-data-employee');
const {Employee} = require('../models/employee-model');


router.get("/", (req, res) => {
    res.sendFile(__dirname + '/employee.html');
  });

  router.post("/", jsonParser, (req, res) => {
    const {employeeName} = req.body;
    const {employeeBranchName} = req.body;
    const {employeeEmail} = req.body;
    const {employeeText}= req.body;
    const{employeeId}= req.body;
    
    
    employeeData.employeeUpdates.push({employeeName, employeeBranchName, employeeEmail, employeeText, employeeId});
    res.json({employeeName,employeeBranchName, employeeEmail, employeeText, employeeId});
   
});

router.get("/:id", (req, res) => {
  const testing = req.params.managerId;
  res.status(200).json({
      message: "you passed the right ID",
      id: testing
  })
});

router.patch("/:id", (req, res) => {
  res.status(200).json({
      message: "updated product",
  })
});

router.delete("/:id", (req, res) => {
 employeeData.employeeUpdates = employeeData.employeeUpdates.filter((element)=> {
     return element.employeeId != req.params.id;
 })
  res.status(200).json({
      message: "deleted ",
      newEmployeeData: employeeData
  })
});




module.exports = {router}