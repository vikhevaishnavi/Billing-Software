const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // Add other fields as needed
});

module.exports = mongoose.model('User', UserSchema);
