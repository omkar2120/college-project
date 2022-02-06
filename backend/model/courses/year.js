const mongoose=require("mongoose")
const yearSchema=mongoose.Schema({
  yearName:{
      type:String,
      require:true
  },
  course:{
      type:mongoose.Types.ObjectId,
      require:true,
      ref:"Course"
  }
})
module.exports=mongoose.model("Year",yearSchema)