const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {User} = require('../users/models');

router.get("/", (req, res) => {
    res.sendFile(__dirname + '/signInSignUp.html');
  });


//post request
router.post("/", jsonParser, (req, res) => {
  //these values from the body/form inputs
  const {signUpName} = req.body;
  const {signUpEmail} = req.body;
  const {signUpPassword} = req.body;
  //push the new inputs to the database via models
  User.create({signUpName, signUpEmail, signUpPassword})
  .then((user)=>{
      //then respond with new json data
      res.json(user);
  });
});


module.exports = {router}