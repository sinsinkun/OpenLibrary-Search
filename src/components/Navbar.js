import { NavLink } from 'react-router-dom';
import { useStoreContext } from './GlobalStore';

function Navbar() {

  const [store] = useStoreContext();

  return(
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">
          JingChang Xiao
        </div>
        {store.winX > 780 ? 
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active">Main</NavLink>
            </li>
            <li>
              <NavLink exact to="/err" className="nav-link" activeClassName="active">Other</NavLink>
            </li>
          </ul> : 
          <button className="btn" style={{color:"lightgrey"}}>
            <span>Menu</span>
          </button>
        }
      </div>
    </nav>
  )
}

export default Navbar;