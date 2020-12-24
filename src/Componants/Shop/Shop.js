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
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.product.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            // pd = load whole products
            // pd.product.key = load all products key
            // product.product.key = clicked product by add to cart button
            newCart = [...others, sameProduct];
        }
        else {
            product.product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart); // update cart to new
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