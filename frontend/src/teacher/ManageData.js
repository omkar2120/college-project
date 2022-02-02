import {HiUserGroup,HiUserAdd} from "react-icons/hi"
import {BsCalendarPlus} from "react-icons/bs"
import {GrView} from "react-icons/gr"
export const data=[
    {
        name:"ADD STUDENT",
        icon:<HiUserAdd/>,
        link:"teacher/manage/student",
        dropdown:[]
    },
    {
        name:"STUDENT LIST",
        icon:<HiUserGroup/>,
        link:false,
        dropdown:["1st Year","2nd Year","3rd Year"]
    },
    {
        name:"TAKE ATTENDANCE",
        icon:<BsCalendarPlus/>,
        link:false,
        dropdown:["1st Year","2nd Year","3rd Year"]
        
    },
    {
        name:"VIEW&UPDATE ATTENDANCE",
        icon:<GrView/>,
        link:false,
        dropdown:["1st Year","2nd Year","3rd Year"]

    }
]
