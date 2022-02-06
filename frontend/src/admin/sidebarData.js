import {AiFillDashboard} from "react-icons/ai"
import {MdManageAccounts} from "react-icons/md"
import {BiBookReader} from "react-icons/bi"
export const sideBarData=[
    {
        icon:<AiFillDashboard/>,
        list:"Dashboard",
        path:"/admin"
    },
    {
        icon:<BiBookReader/>,
        list:"Manage Course",
        path:"/admin/manage/course"
    },,
    {
        icon:<MdManageAccounts/>,
        list:"Manage Student",
        path:"/admin/manage/student"
    },
    {
        icon:<MdManageAccounts/>,
        list:"Manage Teacher",
        path:"/admin/manage/teacher"
    }
]