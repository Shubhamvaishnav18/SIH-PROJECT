const express = require("express");
const dotevn = require('dotenv');

const app = express();


dotevn.config();

app.use(express.json());
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

const port = process.env.PORT
app.listen(port, () => console.log("server started"));


