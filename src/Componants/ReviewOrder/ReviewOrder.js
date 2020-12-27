import React, { useContext, useEffect, useState } from 'react';
import ReviewItems from '../ReviewItems/ReviewItems';
import './ReviewOrder.css';
import emptyCart from '../../images/emptyCart.jpg';
import { getDatabaseCart, removeFromDatabaseCart } from '../utilities/databaseManager';
import { Link } from 'react-router-dom';
import CartReview from '../CartReview/CartReview';
import Footer from '../Footer/Footer';
import ShopNavBar from '../ShopNavBar/ShopNavBar';
import fakeData from '../fakeData';

const ReviewOrder = () => {
    const [cart, setCart] = useState([]);

    // ============== calculated runnig cart price from sesion storage=================
    let price = 0;
    let shippingAndPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        price += cart[i].price * cart[i].quantity;
    }
    price = ((price / 100) * 5) + price; // add tax for

    if (price >= 250) {
        shippingAndPrice = price + 25;
    }
    if (price >= 500) {
        shippingAndPrice = price;
    }
    if (price < 250) {
        shippingAndPrice = price + 50;
    }

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
            product.quantity = savedCart[keys];
            return product;
        });
        setCart(cartProducts);
    }, [])

    return (
        <div className="container px-0">
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
                    <h1>Total: $ {price.toFixed(2)}</h1>
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
                        <Link to="/placeOrder"><button className="btn btn-info btn-lg text-light btn-block"><h5>Proceed to Checkout</h5></button></Link>
                    </CartReview>
                </div>
            </div>}
            {cart.length > 0 && <Footer></Footer>}
        </div>
    );
};

export default ReviewOrder;