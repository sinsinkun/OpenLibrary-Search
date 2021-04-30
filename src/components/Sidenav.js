import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function SideNav(props) {

  const [displayNav, setDisplayNav] = useState(false);
  const sideNavDiv = useRef(null);

  useEffect(() => {
    // opening side-nav
    if (props.showSideNav) setDisplayNav(true);
    // closing side-nav
    else if (sideNavDiv.current) { 
      // play close animation
      sideNavDiv.current.classList.add("side-nav-close");
      // close after timeout
      setTimeout(() => { setDisplayNav(false) }, 290)
    }
  },[props.showSideNav])

  if (displayNav) {
    return(
      <div className="side-nav" ref={sideNavDiv}>
        <div className="navbar-collapse navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active" onClick={() => props.toggleSideNav(false)}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link" activeClassName="active" onClick={() => props.toggleSideNav(false)}>Past Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={() => props.toggleSideNav(false)}>Contact Me</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
  else {
    return null;
  }
}

export default SideNav;