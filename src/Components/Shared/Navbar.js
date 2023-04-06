import React, { useContext } from 'react';
// CONTEXT
import { CartContext } from '../../Context/CartContextProvider';
// ICONS
import shopIcons from "../../assets/icons/shop.svg";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const { state } = useContext(CartContext);
    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                <div>
                    <Link to="/cart"> 
                    <img src={shopIcons} alt="icons" />
                    </Link>

                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;