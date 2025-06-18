
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function Navbar({cartItem}) {
    return (

        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <NavLink className="active-link">Jay Shiv Chat</NavLink>
                    {/* <img src='' alt='logo'/> */}
                </li>
                <li>
                    <NavLink to="/" className="active-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="active-link">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="active-link">Contact</NavLink>
                </li>
                <div className='Mycart'>
                    <li>
                        <NavLink to="/mycart" className="active-link">
                            MyCart
                            {cartItem?.length > 0 ? (<span className="cart-count">{cartItem.length}</span>) : null}
                        </NavLink>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;