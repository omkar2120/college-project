const express=require("express")
require("./db/connect")
const courseRoute=require("./routes/course/course")
const baseUrl="/college/project/api"
const app=express()
const cors=require("cors")
const port=process.env.PORT||4567
app.use(cors())
app.use(express.json())
app.use(baseUrl,courseRoute)

app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})