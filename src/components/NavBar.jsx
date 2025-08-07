import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css'

export default function NavBar() {
  
	return (
    <nav className="navbar">
      <ul className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/vessels">Our Vessels</NavLink>
        <NavLink to="/destinations">Destinations</NavLink>
        <NavLink to="/expedition_planner">Expedition Planner</NavLink>
      </ul>
    </nav>
  );
}
