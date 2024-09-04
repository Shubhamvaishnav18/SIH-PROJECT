const {contactModel} = require("../model/contactModel")
// todo:-
// 1>save contact first
// 2>Send email notification(confirm with subham first)
const saveContact = async(req,res)=>{
    const { name, email, number } = req.body;
    console.log(req.body);

    try {
        // Create a new contact document
        const newContact = new contactModel({ name, email, number });
        await newContact.save();

        // Respond with success
        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: 'An error occurred.', error });
    }
}

module.exports = {
    saveContact
}