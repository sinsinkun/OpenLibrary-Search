import { NavLink } from 'react-router-dom';
import { useStoreContext } from './GlobalStore';

function Navbar() {

  const [store] = useStoreContext();

  return(
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
          <li>
            <NavLink exact to="/err" className="nav-link" activeClassName="active">Other</NavLink>
          </li>
        </ul> : 
        <button>Menu</button>
      }
    </nav>
  )
}

export default Navbar;