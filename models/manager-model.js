const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const managerSchema = mongoose.Schema({
    branchName: String,
    managerName: String,
    text: String,
    phone: Number,
    email: String
})

const Manager =  mongoose.model('Manager', managerSchema);

module.exports = {Manager}