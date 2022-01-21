const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    img:{
        type:String,
        default:"https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png",
    },
},{timestamps:true})

module.exports = mongoose.model("User",UserSchema);