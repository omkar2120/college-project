const mongoose=require("mongoose")
const Course=mongoose.Schema({
    cName:{
        type:String,
        require:true,
        unique:true
    }
})
module.exports=mongoose.model("Course",Course)