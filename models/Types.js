const mongoose = require("mongoose");

const typesSchema = new mongoose.Schema({
    Type:{
        type:String,
        maxlength:20
    },
    Description:{
        type:String,
        required:true
    }
}, {timestamps:true})

const Types = mongoose.model('Types',typesSchema)

module.exports = Types