import Dropbtn from "./Dropbtn";

const Nav = () => {
  return (
    <nav className="Nav">
       <Dropbtn/>
        <form  className = "searchForm" onSubmit = {(e) => e.preventDefault()}>
        <label>Search</label>
         <input
            type = "text"
            placeholder = "Search"
        />

        </form>
       
    </nav>
  )
};

export default Nav;
