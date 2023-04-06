import React, { useEffect, useState, createContext } from 'react';
// API
import { getProducts } from '../services/api';

export const productsContext = createContext();

const ProductsContextProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts());
        }

        fetchAPI()
    }, []);

    return (
        <productsContext.Provider value={products} >
            {children}
        </productsContext.Provider>
    );
};

export default ProductsContextProvider;