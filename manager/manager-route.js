const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {Manager} = require('../models/manager-model');

//get request
router.get("/", (req, res) => {
    //post this file to the user
    res.sendFile(__dirname + '/manager.html');
});

//post request
router.post("/", jsonParser, (req, res) => {
    //these values from the body/form inputs
    const {managerName} = req.body;
    const {managerBranchName} = req.body;
    const {managerEmail} = req.body;
    const {managerText} = req.body;
    const{managerId} = req.body;
    //push the new inputs to the database
    Manager.create({managerName,managerBranchName, managerEmail, managerText, managerId})
    .then((manager)=>{
         //then respond with new json data
    res.json(manager);
    });
   
});

//delete request
router.delete("/:id", (req, res) => {
    Manager.findOneAndRemove({managerId:req.params.id})
    .then(()=>{
        res.status(200).json({
            message: "deleted "
        })
    })
  
});




module.exports = {router}