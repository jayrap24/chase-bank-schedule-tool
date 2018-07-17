const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const managerSchema = mongoose.Schema({
    managerId: String,
    managerBranchName: String,
    managerName: String,
    managerText: String,
    managerEmail: String
})

const Manager =  mongoose.model('Manager', managerSchema);

module.exports = {Manager}