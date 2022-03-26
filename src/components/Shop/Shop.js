import React from 'react';
import { useState, useEffect } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Sidebar from '../Sidebar/Sidebar';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    const handleAddToCart = (id) => {
        if (cart.length === 4) {
            alert("You've alreadey added 4 phones!");
            return;
        }
        const item = products.filter((product) => product.id === id);
        if (cart.indexOf(item) > -1) return;
        const newCart = [...cart, item[0]];
        setCart(newCart);
    };
    return (
        <div className="shop">
            <div className="products">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        {...product}
                        handleAddToCart={handleAddToCart}
                    ></Product>
                ))}
            </div>
            <Sidebar data={cart}></Sidebar>
        </div>
    );
};

export default Shop;
