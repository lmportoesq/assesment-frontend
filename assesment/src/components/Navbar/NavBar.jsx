import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div>
      <nav >
        <ul >
          <li><NavLink className='navLink' to="/">Home</NavLink></li>
          <li><NavLink className='navLink' to="/about">About me</NavLink></li>
        </ul>
      </nav>
    </div>  
  );
}

export default NavBar;