const express = require("express")
const {saveContact} = require("../controller/contactController")

const router = express.Router();

router.route("/").post(saveContact);

module.exports = router;
