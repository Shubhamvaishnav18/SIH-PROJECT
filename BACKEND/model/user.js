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
    contactNo:{ 
        type :String ,
        required: [true,'Contact number is required '],
    },
    password: {
        type: String,
        required: [true,'Password is required for account security'],
    }
},{ timestamps: true });

const UserModel = mongoose.model("User", userSchema);

module.exports = {
    UserModel
};