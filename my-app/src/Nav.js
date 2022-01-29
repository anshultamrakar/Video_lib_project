import { BsFillHouseDoorFill } from "react-icons/bs";
import { AiOutlineHistory } from "react-icons/ai";
import { AiFillLike} from "react-icons/ai";
import { MdOutlineWatchLater, MdPlaylistAddCheck } from "react-icons/md";
import { Link } from "react-router-dom";


const Nav = () => {

  return (
    <nav className = "Nav">
     <form className ="searchForm" onSubmit = {(e) => e.preventDefault()}>
       <label> Search </label>
       <input
       type = "text"
       placeholder = "Search"
    
       />
     </form>
     <ul className = "nav__list">
       <li className = "list-items"> <Link className="icons" to = "">< BsFillHouseDoorFill/></Link></li>
       <li className = "list-items"> <Link className="icons" to = "video">< AiOutlineHistory/></Link></li>
       <li className = "list-items"> <Link className="icons" to = "later"><MdOutlineWatchLater/></Link> </li>
       <li className = "list-items"> <Link className="icons" to = "playlist"><MdPlaylistAddCheck/></Link></li>
       <li className = "list-items"> <Link className="icons" to = "liked">< AiFillLike/> </Link></li>
     </ul>
    </nav>
  )
}

export default Nav;
