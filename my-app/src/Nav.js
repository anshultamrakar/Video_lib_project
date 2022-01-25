import { useState } from "react"
import {  FaBars } from "react-icons/fa";
import {  AiOutlineClose } from "react-icons/ai";
// import {Link} from "react-router-dom"
import { SidebarData } from "./SidebarData";

const Nav = () => {
  const [sideBar , setSideBar ] = useState(false)

  const showMenuBar = () => {
    setSideBar(!sideBar)
  }
  return (
    <>
    <div className="navbar">
      <li className="menu-bars">   
      <FaBars onClick={showMenuBar}/>
      </li>
     
    </div>
    <nav className= {sideBar ? "nav-menu-active" : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggles">
            <AiOutlineClose/>
            </li>
          {SidebarData.map((item) => (
            <li className= {item.cName}>
             {item.icon}
             <span>{item.title}</span>
              
            </li>
          ))}
        </ul>
    </nav>
  </>
  )
};

export default Nav;
