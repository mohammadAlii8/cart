import React, { useContext } from 'react';
import { Link } from "react-router-dom"

//  Function
import { shorten, isInCart, quantityCount } from '../../helper/functions';

// CONTEXT
import { cartContext } from '../../Context/CartContextProvider';

// ICONS
import trashIcon from "../../assets/icons/trash.svg"
const Product = ({ productData }) => {

    const { state, dispatch } = useContext(cartContext)

    return (
        <div>
            <img src={productData.image} alt={productData.title} style={{ width: "200px" }} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${ productData.id }`}>Details</Link>
                <div>
                    {
                        quantityCount(state, productData.id) > 1 && <button onClick={() => dispatch({ type: "DECREASE", payload: productData })}>-</button>
                    }
                    {
                        quantityCount(state, productData.id) === 1 && <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })}>
                            <img src={trashIcon} alt="Trash" style={{ width: "20px" }} />
                        </button>
                    }
                    {
                        isInCart(state, productData.id) ? <button onClick={() => dispatch({ type: "INCREASE", payload: productData })}>+</button> :
                            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>Add To cart</button>
                    }

                </div>
            </div>
        </div>
    );
};

export default Product;