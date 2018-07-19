const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const employeeSchema = mongoose.Schema({
    employeeId: String,
    employeeBranchName: String,
    employeeName: String,
    employeeText: String,
    employeeEmail: String
})

const Employee =  mongoose.model('Employee', employeeSchema);

module.exports = {Employee}