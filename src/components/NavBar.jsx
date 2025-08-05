import { NavLink } from 'react-router-dom';
import './NavBar.css'

export default function NavBar() {
  
	return (
    <nav className="navbar">
      <a>Home</a>
      <a>Destinations</a>
      <a>Expedition Planner</a>
    </nav>
  );
}
