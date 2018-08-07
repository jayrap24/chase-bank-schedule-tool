const express = require('express');
const router = express.Router();



router.get("/", ensureAuthenticated, (req, res) => {
    res.sendFile(__dirname + '/homePage.html');
  });



  //restrict access for users unless they are signed.. then put this function in the get route
  function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        req.flash('error_msg', 'you are not logged in');
        res.redirect('/users/login');
    }
}


module.exports = {router}