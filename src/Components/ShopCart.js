import React, { useContext } from 'react';
// Components
import Cart from './Shared/Cart';

// Context
import { CartContext } from '../Context/CartContextProvider';
import { Link } from 'react-router-dom';

const ShopCart = () => {
    const { state, dispatch } = useContext(CartContext)
    return (
        <div>
            <div>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemsCounter > 0 && <div>
                    <p><span>Total Items:</span>{state.itemsCounter}</p>
                    <p><span>Total Payments:</span>{state.total}</p>
                    <div>
                        <button onClick={() => dispatch({ type: "CHECKOUT" })}>Checkout</button>
                        <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>

                    </div>

                </div>
            }

            {
                state.checkout &&
                <div>
                    <h3>Checkout successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 &&
                <div>
                    <h3>Want To buy?</h3>
                    <Link to="/products">Back to Shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;