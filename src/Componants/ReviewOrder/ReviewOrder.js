import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import fakeData from '../fakeData';
import NavBar from '../NavBar/NavBar';
import ReviewItems from '../ReviewItems/ReviewItems';
import './ReviewOrder.css';
import emptyCart from '../../images/emptyCart.jpg';
import { getDatabaseCart, removeFromDatabaseCart } from '../utilities/databaseManager';
import { Link } from 'react-router-dom';

const ReviewOrder = () => {
    const [cart, setCart] = useState([]);

    const removeProduct = (productKey) => {
        // console.log("Remove Key Clicked" , productKey);
        const newCart = cart.filter(pd => pd.key !== productKey); // find all key except selected key which remove
        setCart(newCart); // update cart after remove an item
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {// load data from database(sesion storage)
        const savedCart = getDatabaseCart();
        // find all product keys from seson database using "Objects.keys" method 
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(keys => {
            const product = fakeData.find(pd => pd.key === keys);
            product.quantity = savedCart[keys]; // add product quantity
            return product;
        });
        setCart(cartProducts);
    }, [])

    return (
        <div className="container">
            <NavBar></NavBar>
            {cart.length <= 0 && <div className="ifCartItemIsEmpty text-center bg-light py-5">
                <img className="img-fluid my-3" src={emptyCart} alt="empty cart" />
                <h1 className="py-3">Your Cart is Empty!</h1>
                <p className="lead py-3">Looks like you haven't made order yet.</p>
                <Link to="/products"><button style={{ backgroundColor: '#f90' }} className="btn text-light p-3 btn-lg"><h5>Continue to Shopping</h5></button></Link>
            </div>}

            {cart.length > 0 && <div className="card my-3">
                <div className="card-header mt-5 d-flex justify-content-between">
                    <h1>My Cart ({cart.length} Items)</h1>
                    <h1>Total: $ 1,309</h1>
                </div>
            </div>}

            {cart.length > 0 && <div className="row">
                <div className="col-md-8">
                    <div>
                        {
                            cart.map(pd => <ReviewItems
                                removeProduct={removeProduct}
                                key={pd.key}
                                product={pd}></ReviewItems>)

                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <Cart cart={cart}></Cart>
                </div>
            </div>}
        </div>
    );
};

export default ReviewOrder;