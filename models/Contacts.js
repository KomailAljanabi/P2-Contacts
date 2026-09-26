const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        maxLength: 8,
        minLength: 8,
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
    job: {
        type: String
    },
    location: {
        type: String
    },
    Type: {
        type: mongoose.Schema.Types.ObjectId,
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