const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    email_is_verified: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true,
    },
},{ strict: false });

module.exports = User = mongoose.model('user', UserSchema);