
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function Navbar({cartItem}) {
    return (

        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <img src=''/>
                    <NavLink className="active-link">Jay Shiv Chat</NavLink>
                </li>
                <li>
                    <NavLink to="/" ClassName="active-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" ClassName="active-link">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" ClassName="active-link">Contact</NavLink>
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