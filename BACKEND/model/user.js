const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Please provide User Name'],
    },
    email: {
        type: String,
        required: [true,'Email is required '],
        unique: true
    },
    contactNo:{ type :String },
    password: {
        type: String,
        required: [true,'Password is required for account security'],
    }
},{ timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = {
    User,
};