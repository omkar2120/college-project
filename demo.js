const data=[
   {
       "_id": "61fea91a7a00d9bc24190796",
       "cName": "BBA-CA",
       "__v": 0,
       "course": {
           "year": {
               "_id": "61fea98a7a00d9bc2419079b",
               "yearName": "FIRST YEAR",
               "course": "61fea91a7a00d9bc24190796",
               "__v": 0,
               "semester": [
                   {
                       "_id": "61feaa2a2991a25188105977",
                       "semName": "SEM1",
                       "year": "61fea98a7a00d9bc2419079b",
                       "__v": 0
                   },
                   {
                       "_id": "61feaa422991a2518810597b",
                       "semName": "SEM2",
                       "year": "61fea98a7a00d9bc2419079b",
                       "__v": 0
                   }
               ]
           }
       }
   },
   {
       "_id": "61fea91a7a00d9bc24190796",
       "cName": "BBA-CA",
       "__v": 0,
       "course": {
           "year": {
               "_id": "61fea9927a00d9bc2419079d",
               "yearName": "SECOND YEAR",
               "course": "61fea91a7a00d9bc24190796",
               "__v": 0,
               "semester": [
                   {
                       "_id": "61feaa562991a2518810597d",
                       "semName": "SEM3",
                       "year": "61fea9927a00d9bc2419079d",
                       "__v": 0
                   },
                   {
                       "_id": "61feaa5e2991a2518810597f",
                       "semName": "SEM4",
                       "year": "61fea9927a00d9bc2419079d",
                       "__v": 0
                   }
               ]
           }
       }
   },
   {
       "_id": "61fea91a7a00d9bc24190796",
       "cName": "BBA-CA",
       "__v": 0,
       "course": {
           "year": {
               "_id": "61fea99b7a00d9bc2419079f",
               "yearName": "THIRD YEAR",
               "course": "61fea91a7a00d9bc24190796",
               "__v": 0,
               "semester": [
                   {
                       "_id": "61feaa722991a25188105981",
                       "semName": "SEM5",
                       "year": "61fea99b7a00d9bc2419079f",
                       "__v": 0
                   },
                   {
                       "_id": "61feaa7c2991a25188105983",
                       "semName": "SEM6",
                       "year": "61fea99b7a00d9bc2419079f",
                       "__v": 0
                   }
               ]
           }
       }
   }
]
let courseData={
   years:[]
}
// name year
data.forEach((d,k)=>{
   courseData.name=d.cName
   courseData._id=d._id
    courseData.years.push({_id:d.course.year._id,year:d.course.year.yearName})
    const {semester} =d.course.year
       courseData.years[k].semster=semester
})
// const {_id,cName,course}=data[0]
// console.log(data[0].course)
console.log(courseData)
// console.log(course)