import React from 'react';
import { Link } from "react-router-dom"
//  Function

import { shorten } from '../../helper/functions';

const Product = ({ productData }) => {
    return (
        <div>
            <img src={productData.image} alt={productData.title} style={{ width: "200px" }} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;