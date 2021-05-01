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
      <div className="title" role="heading" aria-level="1">Open Library Search Tool</div>
      <div className="spacer"></div>
      {store.winX > 780 ? 
        <ul role="navigation">
          <li>
            <NavLink exact to="/" className="nav-link" activeClassName="active">Main</NavLink>
          </li>
          <li>
            <NavLink exact to="/instructions" className="nav-link" activeClassName="active">Instructions</NavLink>
          </li>
        </ul> : 
        <button onClick={toggleSideNav} aria-expanded={showSide ? true : false}>Menu</button>
      }
    </nav>
    {/* Sidebar navigation */}
    {store.winX < 780 ?
    <div className={showSide ? "sidenav" : "sidenav hidden"}>
      <ul role="navigation">
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