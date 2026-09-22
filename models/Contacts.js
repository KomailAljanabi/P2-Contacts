const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        min: 8,
        max: 8,
        required: true
    },
    Email: {
        type: String
    },
    makePublic: {
        type: Boolean,
        default: false
    },
    Company: {
        type: String
    },
    Type: {
        type: String,
        required: true,
        ref: "Types"
    },
    Owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true })

const Contacts = mongoose.model('Contacts', contactsSchema)

module.exports = Contacts