const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {Employee} = require('../models/employee-model');

//get request
router.get("/", (req, res) => {
    res.sendFile(__dirname + '/employee.html');
  });
//post request
  router.post("/", jsonParser, (req, res) => {
    //these values from the body/form inputs
    const {employeeName} = req.body;
    const {employeeBranchName} = req.body;
    const {employeeEmail} = req.body;
    const {employeeText}= req.body;
    const{employeeId}= req.body;
    //push the new inputs to the database via models
    Employee.create({employeeName, employeeBranchName, employeeEmail, employeeText, employeeId})
    .then((employee)=>{
        //then respond with new json data
        res.json(employee);
    });
});

//delete request
router.delete("/:id", (req, res) => {
Employee.findOneAndRemove({employeeId:req.params.id})
.then(()=>{
    res.status(200).json({
        message: "deleted "      
    })
})
});




module.exports = {router}