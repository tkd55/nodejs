const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, require: true},
    emails: {type: [String]},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});
module.exports = mongoose.model('users', UserSchema);