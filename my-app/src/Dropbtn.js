const Dropbtn = () => {

  
  
    return (
    <div className = " dark">
        <label for="menu-opener" tabindex="0" aria-haspopup="true" role="button"	aria-controls="menu" class="OpenMenuButton" id="openmenu">OPEN MENU</label>


<input type="checkbox" data-menu id="menu-opener" hidden/>
<aside class="DrawerMenu" role="menu" id="menu" aria-labelledby="openmenu">
  <nav class="Menu">
    <h2>Awesome CSS Menu</h2>
    <a role="menuitem" tabindex="-1" href="#">Menu Item 01</a>
    <a role="menuitem" tabindex="-1" href="#">Menu Item 02</a>
    <a role="menuitem" tabindex="-1" href="#">Menu Item 03</a>
    <a role="menuitem" tabindex="-1" href="#">Menu Item 04</a>
    <a role="menuitem" tabindex="-1" href="#">Menu Item 05</a>
    <a role="menuitem" tabindex="-1" href="#">Menu Item 06</a>
    <a role="menuitem" tabindex="-1" href="#">Menu Item 07</a>
    <a role="menuitem" tabindex="-1" href="#">Menu Item 08</a>
    <a role="menuitem" tabindex="-1" href="#">Menu Item 09</a>
    <a role="menuitem" tabindex="-1" href="#">Menu Item 10</a>
    <a role="menuitem" tabindex="-1" href="#">Menu Item 11</a>
    <a role="menuitem" tabindex="-1" href="#">Menu Item 12</a>
    <a role="menuitem" tabindex="-1" href="#">Menu Item 13</a>
    <a role="menuitem" tabindex="-1" href="#">Menu Item 14</a>
    <a role="menuitem" tabindex="-1" href="#">Menu Item 15</a>
  </nav>
  <label for="menu-opener" class="MenuOverlay"></label>
</aside>
    </div>
  )
};

export default Dropbtn;
