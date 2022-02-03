const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://college:project@cluster0.hmrzx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(()=>{console.log("database connected!")}).catch((err)=>{console.log(err)})