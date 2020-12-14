import React, { createContext, useState } from 'react';
import fakeData from '../fakeData';
import './Shop.css';
import './grid.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState(fakeData);
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        const newCart = [...cart,product]; //copy existing cart element
        setCart(newCart); // update cart to new
    }
    return (
        <div className="container">
            <h1 className="text-center sticky-top bg-primary text-light">Cart Items:  {cart.length}</h1>
            <div className="row ml-0">
                {
                    products.map(product => <Product
                        name={product.name} price={product.price}
                        seller={product.seller} star={product.star}
                        stock={product.stock} img={product.img}
                        handleAddProduct={handleAddProduct} key={product.key}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Shop;