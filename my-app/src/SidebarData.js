import { BsHouseDoorFill} from "react-icons/bs";
import {  FaHistory } from "react-icons/fa";
import {  AiOutlineLike } from "react-icons/ai";
export const  SidebarData = [
    {
        title : "Home",
        path : "/",
        icon : <BsHouseDoorFill/>,
        cName : "nav-menu"
    },
    {
        title : "Liked Videos",
        path : "/",
        icon : <AiOutlineLike/>,
        cName : "nav-menu"
    },
    {
        title : "Watch History",
        path : "/",
        icon : <FaHistory/>,
        cName : "nav-menu"
    },
]


