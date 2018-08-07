const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserChaseSchema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    password:{
        type: String
    },
    email:{
        type: String
    },
    name:{
        type: String
    } 
});

const UserChase = module.exports = mongoose.model('UserChase',UserChaseSchema);

module.exports.createUser = function (newUser, callback){
    //get bcrypt from google
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}


module.exports.getUserByUsername = function(username, callback){
    
	const query = {username: username};
	UserChase.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	UserChase.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}