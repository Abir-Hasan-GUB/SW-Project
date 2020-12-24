import React, { createContext, useState } from 'react';
import fakeData from '../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import NavBar from '../NavBar/NavBar';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../utilities/databaseManager';

const Shop = () => {
    const [products, setProducts] = useState(fakeData);
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        // console.log(product)
        const newCart = [...cart, product]; //copy existing cart element
        setCart(newCart); // update cart to new
        // console.log("Cart" ,cart)
        // console.log("key "+product.product.key)
        const sameProduct = newCart.filter(pd => pd.product.key === product.product.key);
        // pd = load whole products
        // pd.product.key = load all products key
        // product.product.key = clicked product by add to cart button
        const count = sameProduct.length;
        // console.log(count)
        addToDatabaseCart(product.product.key, count);
    }
    return (
        <div className="container">
            <NavBar cart={cart.length}></NavBar>
            {/* <h1 className="text-center sticky-top bg-primary text-light">Cart Items:  {cart.length}</h1> */}
            <div className="row mt-4 mr-0">
                <div className="col-md-8 mt-4">
                    {
                        products.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddProduct={handleAddProduct}
                        ></Product>)
                    }
                </div>
                <div className="col-md-4 my-5">
                    
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;