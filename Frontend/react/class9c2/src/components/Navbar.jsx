import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { bitesContext } from '../context/MyContext';

function Navbar() {
  const { cartItem } = useContext(bitesContext);
  console.log("Navbar", cartItem);

  return (
    <nav className="navbar">
      <ul className="nav-list-container">
        <div className="nav-list">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>
          </li>
        </div>
        <div className="my-cart">
          <li>
            <NavLink to="/mycart" className={({ isActive }) => isActive ? "active-link" : ""}>
              🛒 MyCart
              {cartItem?.length > 0 && <span className="cart-badge">{cartItem.length}</span>}
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
