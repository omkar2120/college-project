const mongoose = require("mongoose");

const User = mongoose.Schema(
    {
    fullname:{
        type:String,
        required:true,     
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type: String,
        enum: ['user','admin'],
        default:"Student"
    }
    },{timestamps:true}
)


module.exports=mongoose.model("USER",User);