import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useStoreContext } from './redux';

function Navbar() {

  const [showSide, setShowSide] = useState(false);
  const [store] = useStoreContext();

  function toggleSideNav() {
    if (showSide) setShowSide(false);
    else setShowSide(true);
  }

  return(
    <>
    <nav>
      <div className="title">Open Library Search Tool</div>
      <div className="spacer"></div>
      {store.winX > 780 ? 
        <ul>
          <li>
            <NavLink exact to="/" className="nav-link" activeClassName="active">Main</NavLink>
          </li>
          <li>
            <NavLink exact to="/instructions" className="nav-link" activeClassName="active">Instructions</NavLink>
          </li>
        </ul> : 
        <button onClick={toggleSideNav}>Menu</button>
      }
    </nav>
    {/* Sidebar navigation */}
    {store.winX < 780 ?
    <div className={showSide ? "sidenav" : "sidenav hidden"}>
      <ul>
        <li>
          <NavLink exact to="/" className="nav-link" activeClassName="active" 
            onClick={toggleSideNav}>Main</NavLink>
        </li>
        <li>
          <NavLink exact to="/instructions" className="nav-link" activeClassName="active" 
            onClick={toggleSideNav}>Instructions</NavLink>
        </li>
      </ul>
    </div> 
    : ""}
    </>
  )
}

export default Navbar;