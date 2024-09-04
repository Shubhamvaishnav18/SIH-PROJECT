const mongoose = require("mongoose");

// const connect_db = async () => {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/userinfo');
//         console.log("Database connected");
//     } catch (error) {
//         console.log(error);
//     }
// }

// module.exports = connect_db;
// const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose
      .connect("mongodb://127.0.0.1:27017/userInfo")
      .then(() => console.log("db connected"))
      .catch((error) => console.log(error))
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB