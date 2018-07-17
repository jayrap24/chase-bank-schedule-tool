const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const managerData = require('./storage-data-manager');
const {Manager} = require('../models/manager-model');

router.get("/", (req, res) => {
    res.sendFile(__dirname + '/manager.html');
});

router.post("/", jsonParser, (req, res) => {
    const {managerName} = req.body;
    const {managerBranchName} = req.body;
    const {managerEmail} = req.body;
    const {managerText}= req.body;
    const{managerId}= req.body;
    
    
    managerData.managerUpdates.push({managerName,managerBranchName, managerEmail, managerText, managerId});
    res.json({managerName,managerBranchName, managerEmail, managerText, managerId});
   
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
   managerData.managerUpdates = managerData.managerUpdates.filter((element)=> {
       return element.managerId != req.params.id;
   })
    res.status(200).json({
        message: "deleted ",
        newManagerData: managerData
    })
});




module.exports = {router}