const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const managerData = require('./storage-data-manager');
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
    //push the new inputs to the storage-data-manager
    managerData.managerUpdates.push({managerName,managerBranchName, managerEmail, managerText, managerId});
    //then respond with new json data
    res.json({managerName,managerBranchName, managerEmail, managerText, managerId});
});

//delete request
router.delete("/:id", (req, res) => {
   managerData.managerUpdates = managerData.managerUpdates.filter((element)=> {
       return element.managerId != req.params.id;
   })
    res.status(200).json({
        message: "deleted ",
        newManagerData: managerData
    })
});




module.exports = {router}