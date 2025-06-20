import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/admin" className={({ isActive }) => (isActive ? 'active' : '')}>
        Admin
      </NavLink>
      <NavLink to="/user" className={({ isActive }) => (isActive ? 'active' : '')}>
        User
      </NavLink>
    </nav>
  );
}
