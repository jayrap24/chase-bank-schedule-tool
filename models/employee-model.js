const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const employeeSchema = mongoose.Schema({
    id: String,
    branchName: String,
    employeeName: String,
    text: String,
    email: String
})

const Employee =  mongoose.model('Employee', employeeSchema);

module.exports = {Employee}