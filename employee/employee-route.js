const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    res.sendFile(__dirname + '/employee.html');
    console.log("got to localhost 8080")
  });


module.exports = {router}