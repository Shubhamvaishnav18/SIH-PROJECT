const express = require("express");
const dotevn = require('dotenv');
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');
const checkUserAuth = require('./middleware/authMiddleware.js')
const authRouter = require("./routes/authRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const connectDB = require("./config/db.js");
const contactUs = require("./routes/contactRoutes.js")
const app = express();


dotevn.config();
app.use(cors());
connectDB()

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.json());
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded


app.use("/auth", authRouter);
app.use('/profile', userRouter);
app.use("/submit-form", contactUs);
const port = process.env.PORT
app.listen(port, () => console.log("server started"));


