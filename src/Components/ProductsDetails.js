import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
// Context
import { productsContext } from "../Context/ProductsContextProvider";

const ProductsDetails = (props) => {

    const params = useParams();
    console.log(params.id)

    const data = useContext(productsContext);
    const product = data[params.id - 1]
    const { image, title, description, price, category } = product;

    return <div>
        <img src={image} alt="product" />
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p> <span>Category:</span>
                {" "}{category}
            </p>
            <div>
                <span>{price}$</span>
                <Link to="/products">back to shop</Link>
            </div>
        </div>
    </div>;
};

export default ProductsDetails;
