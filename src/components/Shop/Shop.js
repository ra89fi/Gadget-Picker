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
        if (cart.filter((product) => product.id === id).length) return;
        const item = products.filter((product) => product.id === id);
        const newCart = [...cart, item[0]];
        setCart(newCart);
    };
    const handleRemoveFromCart = (id) => {
        const rest = cart.filter((product) => product.id !== id);
        setCart(rest);
    };
    const chooseRandom = () => {
        if (cart.length < 2) return;
        const rn = Math.floor(Math.random() * cart.length);
        console.log(rn);
        const item = cart[rn];
        setCart([item]);
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
            <Sidebar
                handleRemoveFromCart={handleRemoveFromCart}
                chooseRandom={chooseRandom}
                data={cart}
            ></Sidebar>
        </div>
    );
};

export default Shop;
