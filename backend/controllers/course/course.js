const { Course, Year, Semester } = require("../../model/courses/index");
exports.createCourse = async (req, res) => {
  try {
    let { cName } = req.body;
    cName = cName.toUpperCase();
    const theCourse = new Course({ cName });
    const createdCourse = await theCourse.save();
    res.status(200).send({ course: createdCourse, msg: "course created!" });
  } catch (err) {
    const split_Err = err.message.split(" ");
    if (split_Err[11] === "cName:")
      return res
        .status(404)
        .send(`the course (${split_Err[12]}) is already created!`);
  }
};
exports.createYear = async (req, res) => {
  try {
    let { yearName, course } = req.body;
    yearName = yearName.toUpperCase();
    const yearDetail = new Year({ yearName, course });
    const createdYear = await yearDetail.save();
    res.status(200).send({ year: createdYear, msg: "year created" });
  } catch (err) {
    const split_Err = err.message.split(" ");
    if (split_Err[11] === "yearName:")
      return res
        .status(404)
        .send(`the year (${split_Err[12]}) is already created!`);
  }
};
exports.createSemester=async(req,res)=>{
    try{
        let {semName,year}=req.body
        semName=semName.toUpperCase()
        const theSem=new Semester({semName,year})
        const createdSemester=await theSem.save()
        res.status(200).send({semsester:createdSemester,msg:"semester created!"})

    }
    catch(err){
        const split_Err = err.message.split(" ");
    if (split_Err[11] === "semName:")
      return res
        .status(404)
        .send(`the semester (${split_Err[12]}) is already created!`);
    }
}

// collecting All courses and details 
exports.getCourses=async(req,res)=>{
  try{
    let dataToSend=[]
    const theCourses=await Course.find({})
    let dataToAdd={}
   for(let i=0;i<theCourses.length;i++){
      dataToAdd.course=theCourses[i]
      let theYear=await Year.find({}).where({"course":theCourses[i]._id})
      dataToAdd.years=theYear
      let theTotalSemester=[]
      for(let j=0;j<theYear.length;j++){
      let theSemesters=await Semester.find({}).where({"year":theYear[j]._id})
      if(theSemesters.length!=0)
      theTotalSemester.push(theSemesters)
    }
     if(theTotalSemester.length!=0)
     dataToAdd.Semesters=theTotalSemester
     else
     dataToAdd.Semesters=false
      dataToSend.push(dataToAdd)
      dataToAdd={}
   }
   res.send(dataToSend)
  }
  catch{

  }
}

// collecting course details by course Id
exports.getCourseById = async (req, res) => {
  try {
    const dataToSend={}
    const {_id}=req.params
    const theCourses = await Course.findById(_id)
    dataToSend.course=theCourses
    const theYears=await Year.find({}).where({"course":theCourses._id})
    dataToSend.years=theYears
    let allSems=[]
    for(let i=0;i<theYears.length;i++){
      const theSem=await Semester.find({}).where({"year":theYears[i]._id})
      if(theSem.length!=0)
      allSems.push(theSem)
    }
    if(allSems.length!=0)
    dataToSend.Semesters=allSems
    else
    dataToSend.Semesters=false
    // console.log(dataToSend)
    // const theCourses = await Course.aggregate([
    //   {$match:{_id}}
      //      {
      //   $lookup: {
      //     from: "years",
      //     as: "course.year",
      //     foreignField: "course",
      //     localField: "_id",
      //   }
      // },
      // {$unwind:{path:"$course.year",preserveNullAndEmptyArrays:true}},
      // {
      //     $lookup:{
      //       from: "semesters",
      //       as: "course.year.semester",
      //       foreignField: "year",
      //       localField: "course.year._id",
      //     }
      // }
    // ]);
//     let dataToSend={
//         years:[]}
//     theCourses.forEach((cr,k)=>{
//         dataToSend.name=cr.cName
//            dataToSend._id=cr._id
//             dataToSend.years.push({_id:cr.course.year._id,year:cr.course.year.yearName})
//             const {semester} =cr.course.year
//                dataToSend.years[k].semesters=semester
// })

    res.json(dataToSend);
  } catch (err) {
    console.log(err);
  }
};
