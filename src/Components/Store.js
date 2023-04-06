import React, { useContext } from 'react';

import Product from './Shared/Product';
// Context
import { productsContext } from '../Context/ProductsContextProvider';
const Store = () => {
    const Products = useContext(productsContext)
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            {
                Products.map(product =>
                    <Product
                        key={product.id}
                        productData={product}
                    />)
            }
        </div>
    );
};

export default Store;