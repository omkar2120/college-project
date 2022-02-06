const mongoose=require("mongoose")
const semesterSchema=mongoose.Schema({
    semName:{
        type:String,
        require:true
    },
    year:{
        type:mongoose.Types.ObjectId,
        require:true,
        ref:"Year"
    }
})
module.exports=mongoose.model("Semester",semesterSchema)