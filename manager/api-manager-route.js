
const express = require('express');
const router = express.Router();

const {Manager} = require('../models/manager-model');

router.get("/", (req, res) => {
Manager.find().then((managers)=>{
  res.json(managers);
})


  });


  
module.exports = {router}