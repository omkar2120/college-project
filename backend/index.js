const express=require("express")
const app=express()
const cors=require("cors")
const port=process.env.PORT||4657
app.use(cors())
app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})