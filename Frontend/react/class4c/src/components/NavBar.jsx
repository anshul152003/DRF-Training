import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><NavLink to="/" exact="true" className="nav-link" activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/about" className="nav-link" activeclassname="active">About</NavLink></li>
                <li><NavLink to="/contact" className="nav-link" activeclassname="active">Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
