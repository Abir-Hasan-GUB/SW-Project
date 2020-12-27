import React, { useEffect, useState } from 'react';
import placeOrder from '../../images/place order.gif';
import fakeData from '../fakeData';
import { getDatabaseCart, processOrder } from '../utilities/databaseManager';
import bkashRouls from '../../images/bkashrouls.png';
import emptyCart from '../../images/emptyCart.jpg';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import ShopNavBar from '../ShopNavBar/ShopNavBar';

const PlaceOrder = () => {
    // ============== calculated order price =================
    const [cart, setCart] = useState([]);
    let price = 0;
    for (let i = 0; i < cart.length; i++) {
        price += cart[i].price * cart[i].quantity;
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

    console.log(cart)

    const handlePlaceOrder = () => {
        setCart([]);
        processOrder();
    }

    return (
        <div className="container bg-light px-0">
            <ShopNavBar></ShopNavBar>

            {cart.length <= 0 && <div className="ifCartItemIsEmpty text-center bg-light">
                <img className="img-fluid my-5" src={emptyCart} alt="empty cart" />
                <h1 className="mt-5">Your Cart is Empty!</h1>
                <p className="lead py-3">Looks like you haven't made order yet.</p>
                <Link to="/products"><button style={{ backgroundColor: '#f90' }} className="btn text-light my-5 p-3 btn-lg"><h5>Continue to Shopping</h5></button></Link>
            </div>}


            {cart.length > 0 && <form action="">
                <h1 className="mt-5 pb-3 pt-5 text-center text-danger">Checkout</h1>
                <div className="divider" style={{ borderBottom: "3px solid red" }}></div>
                <h3 className="p-3"><strong>Billing Details</strong></h3>
                <div className="billingAddress p-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <h6><label htmlFor="productName">First Name</label></h6>
                                <input placeholder="First Name" className="form-control" type="text" name="" id="productName" rounded required />

                            </div>
                            <div className="form-group">
                                <h6><label htmlFor="company">Phone Number</label></h6>
                                <input className="form-control" type="tel" name="" id="company" placeholder="Phone Number" rounded required />

                            </div>
                            <div className="form-group">
                                <h6><label htmlFor="privateComment">Private Comment</label></h6>
                                <textarea className="form-control" name="" placeholder="Enter Your Private Comment" id="privateComment" cols="30" rows="5" rounded required></textarea>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <h6><label htmlFor="lastName">Last Name</label></h6>
                                <input type="text" className="form-control" name="" placeholder="Last Name" id="lastName" rounded required />

                            </div>
                            <div className="form-group">
                                <h6><label htmlFor="availableNumber">Email Address</label></h6>
                                <input type="email" className="form-control" name="" placeholder="Your Email" id="availableNumber" rounded required />

                            </div>
                        </div>
                    </div>
                    {/* <div className="adminBtn  d-flex justify-content-center my-3">
                           <input className="btn btn-success btn-lg btn-block w-50" type="submit" value="Add Product"/>
                           </div> */}

                </div>
                <h3 className="p-3">Your Order</h3>
                <div className="productTable p-3">
                    <table className="table">
                        <tr>
                            <th className="text-left">Product</th>
                            <th className="text-right">Unit Price</th>
                            <th className="text-right">Quantity</th>
                            <th className="text-right">Total Price</th>
                        </tr>
                        { // load card product form sesion storage
                            cart.map(pd => <tr>
                                <td className="text-left">{pd.name}</td>
                                <td className="text-right">$ {pd.price}</td>
                                <td className="text-right">{pd.quantity}</td>
                                <td className="text-right">$ {pd.price * pd.quantity}</td>
                            </tr>
                            )
                        }
                    </table>
                    <table className="table">
                        <tr>
                            <th className="text-left">Subtotal</th>
                            <th className="text-right">$ {price}</th>
                        </tr>
                        <tr>
                            <th className="text-left">Total</th>
                            <th className="text-right">$ {price}</th>
                        </tr>
                    </table>
                    <p className="text-danger">** Delive Charge Vary some times...</p>
                </div>

                {/* ============ bkash payment section ================= */}
                <div className="p-3">
                    <h3 className="mb-3">Select Payment Method</h3>
                    <input className="mr-2" type="radio" name="bkash" id="bkash" data-toggle="collapse" href="#bkashToggol" role="button" aria-expanded="false" aria-controls="bkashToggol" />

                    <label htmlFor="bkash"><strong>bKash Transfer</strong></label>

                    <div class="collapse" id="bkashToggol">
                        <img style={{ width: '100%' }} className="img-fluid rounded" src={bkashRouls} alt="bkashRouls" />
                        <div className="form-group mt-3">
                            <label className="mt-2" htmlFor="bkashNumber"><strong>bKash Number</strong></label>
                            <input className="form-control w-50 form-control-lg" placeholder="bKash Number" type="tel" name="" id="bkashNumber" required />
                            <label className="mt-2" htmlFor="transactionId"><strong>bKash transaction ID</strong></label>
                            <input className="form-control w-50 form-control-lg" placeholder="bKash transaction ID" type="tel" name="" id="transactionId" required />
                        </div>
                    </div>

                    {/* ============ terms and conditions ================= */}
                    <h6><label htmlFor="terms" className="mt-3"><input type="checkbox" name="" id="terms" required /> I have read and agree to the website <Link to="termsAndService" className="text-danger">terms and conditions *</Link></label></h6>
                    <div className="text-right my-5 pr-3">
                        {/* <Link to="/orderComplete"> */}
                        <button onClick={handlePlaceOrder} className="btn btn-success btn-lg p-2 rounded">Place Order</button>
                        {/* </Link> */}
                    </div>

                </div>
            </form>}
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;