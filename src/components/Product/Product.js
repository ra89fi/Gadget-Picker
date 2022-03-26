import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    return (
        <div className="product">
            <img src={props.image} alt={props.name} />
            <p className="name">{props.name}</p>
            <button onClick={() => props.handleAddToCart(props.id)}>
                <p>Add to Cart</p>&nbsp;
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
