const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
});

const contactModel = mongoose.model("contact", contactSchema);
module.exports = {
    contactModel
}