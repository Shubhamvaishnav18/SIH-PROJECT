// const mongoose = require("mongoose");

// const cropSchema = new mongoose.Schema({
//     cropName :{
//         type: String,
//         required: true,
//         trim: true,
//     }
// },{ timestamps: true })

// const crop = mongoose.model("crop",cropSchema);

const cropListingSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : `user`,
        required: true,

    },
    cropName : {
        type: String,
        required: true,
        trim: true,
    },
    quantity : {
        type: Number,
        required:true,
        min:0,
    },
    // not sure needed to be added 
    quality : {
        type: String,
        required:true,
    },
    prize : {
        type: Number,
        required:true,
        min:0,
    },
    listingDate : {
        type: Date,
        default : Date.now,
    }
},{ timestamps: true })

const cropListing = mongoose.model("cropListing",cropListingSchema);

module.exports = {
    // crop,
    cropListing
}