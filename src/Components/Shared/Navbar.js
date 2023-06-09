import React, { useContext } from 'react';
// CONTEXT
import { CartContext } from '../../Context/CartContextProvider';
// ICONS
import shopIcons from "../../assets/icons/shop.svg";
// STYLES
import styles from "./Navbar.module.css"

import { Link } from 'react-router-dom';
const Navbar = () => {
    const { state } = useContext(CartContext);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
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