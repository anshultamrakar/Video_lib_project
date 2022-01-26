
const Nav = () => {

  return (
    <nav className = "Nav">
     <form className ="searchForm" onSubmit = {(e) => e.preventDefault()}>
       <label> Search </label>
       <input
       type = "text"
       placeholder = "Search"
       onchange = {(e) => console.log(e.target.value)}
       />
     </form>
     <ul className = "nav__list">
       <li className = "list-items"> Home </li>
       <li className = "list-items"> History </li>
       <li className = "list-items"> Playlist </li>
       <li className = "list-items"> Watch Later</li>
       <li className = "list-items"> Liked Videos</li>
     </ul>
    </nav>
  )
}

export default Nav;
