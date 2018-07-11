
const express = require('express');
const router = express.Router();


const managerData = require('./storage-data-manager');

router.get("/", (req, res) => {
    res.json(managerData)
    console.log("got to localhost 8080")
  });


  
module.exports = {router}