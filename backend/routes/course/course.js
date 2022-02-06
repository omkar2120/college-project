const route=require("express").Router()
const {createCourse,createYear,getCourseById,createSemester,getCourses}=require("../../controllers/course/course")
route.post("/course/create",createCourse)
route.post("/year/create",createYear)
route.post("/semester/create",createSemester)
route.get("/courses/get/:_id",getCourseById)
route.get("/get/all/courses",getCourses)
module.exports=route