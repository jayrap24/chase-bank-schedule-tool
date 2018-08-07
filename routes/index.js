const express = require('express');
const router = express.Router();

//Get homepage.. when user enters website homepage
router.get('/', function(req,res){
    res.render('register');
});


module.exports = router;