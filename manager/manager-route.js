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
    const {branchName} = req.body;
    const {email} = req.body;
    
    
    managerData.managerUpdates.push({managerName});
    managerData.managerUpdates.push({branchName});
    managerData.managerUpdates.push({email});
    res.json({managerName});
    res.json({branchName});
    res.json({email});

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
    res.status(200).json({
        message: "deleted product",
    })
});




module.exports = {router}