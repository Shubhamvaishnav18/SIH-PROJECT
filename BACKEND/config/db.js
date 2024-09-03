const mongoose = require("mongoose");

const connect_db = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/userinfo');
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect_db;