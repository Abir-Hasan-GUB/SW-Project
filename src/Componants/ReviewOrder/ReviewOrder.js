import React, { useContext, useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import fakeData from '../fakeData';
import NavBar from '../NavBar/NavBar';
import ReviewItems from '../ReviewItems/ReviewItems';
import './ReviewOrder.css';
import emptyCart from '../../images/emptyCart.jpg';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../utilities/databaseManager';
import { Link } from 'react-router-dom';
import CartReview from '../CartReview/CartReview';
import Footer from '../Footer/Footer';
import ShopNavBar from '../ShopNavBar/ShopNavBar';

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

    const handlePlaceOrder = () => {
        setCart([]);
        processOrder();
    }

    return (
        <div className="container">
                <ShopNavBar></ShopNavBar>
            {cart.length <= 0 && <div className="ifCartItemIsEmpty text-center bg-light">
                <img className="img-fluid my-5" src={emptyCart} alt="empty cart" />
                <h1 className="mt-5">Your Cart is Empty!</h1>
                <p className="lead py-3">Looks like you haven't made order yet.</p>
                <Link to="/products"><button style={{ backgroundColor: '#f90' }} className="btn text-light my-5 p-3 btn-lg"><h5>Continue to Shopping</h5></button></Link>
            </div>}

            {cart.length > 0 && <div className="card mt-5">
                <div className="card-header mt-3 d-flex justify-content-between">
                    <h1>My Cart ({cart.length} Items)</h1>
                    <h1>Total: $ (upcomming)</h1>
                </div>
            </div>}

            {cart.length > 0 && <div className="row">
                <div className="col-md-8 cartReviwDiv">
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
                    <CartReview cart={cart}>
                    <Link to="/placeOrder"><button onClick={handlePlaceOrder} className="btn btn-info btn-lg text-light btn-block"><h5>Place Order</h5></button></Link>
                    </CartReview>
                </div>
            </div>}
            {cart.length > 0 && <Footer></Footer>}
        </div>
    );
};

export default ReviewOrder;