import React, { createContext, useEffect, useState } from 'react';
import fakeData from '../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import NavBar from '../NavBar/NavBar';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState(fakeData);
    const [cart, setCart] = useState([])

    // useEffect(() => {
    //     const saveCart = getDatabaseCart();
    //     const productsKeys = Object.keys(saveCart);
    //     const previousCart = productsKeys.map(existingKey => {
    //         const product = fakeData.find(pd => pd.key === existingKey);
    //         product.quantity = saveCart[existingKey];
    //         return product;
    //     })
    //     // setCart(previousCart) error here . eita dile erroer aste
    // }, [])


    const handleAddProduct = ({product}) => {
        console.log(product.key)
        const newCart = [...cart , product];
        setCart(newCart); // update cart to new
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
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
                    <Cart cart={cart}>
                    <Link to="/reviewOrder"><button className="btn btn-info btn-lg text-light btn-block"><h5>Review Your Order</h5></button></Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;