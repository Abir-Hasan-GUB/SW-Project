import React, { useContext, useEffect, useState } from 'react';
import placeOrder from '../../images/place order.gif';
import fakeData from '../fakeData';
import { getDatabaseCart, processOrder } from '../utilities/databaseManager';
import bkashRouls from '../../images/bkashrouls.png';
import emptyCart from '../../images/thankYouForYourOrder.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import ShopNavBar from '../ShopNavBar/ShopNavBar';
import { UserContext } from '../../App';

const PlaceOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [cart, setCart] = useState([]);

    // ============== calculated order price =================
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

    const handlePlaceOrder = () => {
        setCart([]);
        processOrder();
    }
    // console.log(new Date())

    // order send to database
    const handleAddOrder = (e) => {
        let phone = document.getElementById('userPhone').value;
        let privateComment = document.getElementById('privateComment').value;
        let bKashNumber = document.getElementById('bKashNumber').value;
        let bKashTransactionID = document.getElementById('transactionId').value;
        let currentDate = new Date();
        let finalPrice = document.getElementById('finalTotalPrice').innerText;

        let userOrder = {
            name: loggedInUser.name,
            email: loggedInUser.email,
            img: loggedInUser.photo,
            cart: cart,
            status: 'pending',
            date: currentDate.toLocaleDateString(),
            phone: phone,
            price: finalPrice,
            paymentMethod: 'bKash',
            privateComment: privateComment,
            bKashNumber: bKashNumber,
            bKashTransactionID: bKashTransactionID

        }
        // console.log(typeof userOrder)
        // send comment data to database
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userOrder)
        })
            .then(response => response.json())
            .then(success => {
                if (success.insertedCount) {
                    alert("Order Successfully Placed !");
                    handlePlaceOrder();
                }

            })

        document.getElementById('userPhone').value = '';
        document.getElementById('privateComment').value = '';
        document.getElementById('bKashNumber').value = '';
        document.getElementById('transactionId').value = '';

        e.preventDefault();
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

    //  ====================== Apply promo code =================
    const applyPromoCode = () => {
        let promoCount = 0;
        let promoCode = document.getElementById('GetPromoCode').value;
        let totalPrice = shippingAndPrice;
        // let mainPrice = totalPrice;
        let reducePrice = totalPrice / 4;
        let updatePrice = totalPrice - reducePrice;

        if (promoCode === 'abir25') {
            ++promoCount;
            console.log('clicked')
            console.log(updatePrice)
            document.getElementById('finalTotalPrice').innerText = updatePrice.toFixed(2);
            // document.getElementById('promoCode').value = '';
            if (promoCount) {
                alert("Promo Code Added !");
                document.getElementById('GetPromoCode').value = '';
                document.getElementById('GetPromoCode').disabled = true;
                document.getElementById('promoButton').disabled = true;
            }
        }
        else {
            alert("Wrong Promo Code !")
        }
    }



    return (
        <div className="container bg-light px-0">
            <ShopNavBar></ShopNavBar>

            {cart.length <= 0 && <div className="ifCartItemIsEmpty text-center bg-light">
                <img style={{ width: '100%' }} className="img-fluid my-5" src={emptyCart} alt="empty cart" />
                <Link to="/products"><button style={{ backgroundColor: '#f90' }} className="btn text-light mb-4 p-3 btn-lg"><h5>Continue to Shopping</h5></button></Link>
                <Link to="/client"><button className="btn ml-5 btn-success mb-4 p-3 btn-lg"><h5>Check Your Order</h5></button></Link>
            </div>}


            {cart.length > 0 && <form onSubmit={handleAddOrder}>
                <h1 className="mt-5 pb-3 pt-5 text-center text-danger">Checkout</h1>
                <div className="divider" style={{ borderBottom: "3px solid red" }}></div>
                <h3 className="p-3"><strong>Billing Details</strong></h3>
                <div className="billingAddress p-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <h6><label htmlFor="productName">First Name</label></h6>
                                <input value={loggedInUser.name} placeholder="First Name" className="form-control" type="text" name="" id="productName" rounded required />

                            </div>
                            <div className="form-group">
                                <h6><label htmlFor="company">Phone Number</label></h6>
                                <input className="form-control" type="tel" name="" id="userPhone" placeholder="Phone Number" rounded required />

                            </div>
                            <div className="form-group">
                                <h6><label htmlFor="privateComment">Private Comment</label></h6>
                                <textarea className="form-control" name="" placeholder="Enter Your Private Comment" id="privateComment" cols="30" rows="5" rounded required></textarea>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <h6><label htmlFor="lastName">Last Name</label></h6>
                                <input type="text" className="form-control" name="" placeholder="Last Name (optional)" id="lastName" rounded />

                            </div>
                            <div className="form-group">
                                <h6><label htmlFor="availableNumber">Email Address</label></h6>
                                <input value={loggedInUser.email} type="email" className="form-control" name="" placeholder="Your Email" id="availableNumber" rounded required />

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
                                <td className="text-right">{pd.price}</td>
                                <td className="text-right">{pd.quantity}</td>
                                <td className="text-right">{pd.price.toFixed(2) * pd.quantity.toFixed(2)}</td>
                            </tr>
                            )
                        }
                    </table>
                    <table className="table">
                        <tr>
                            <th className="text-left">Subtotal</th>
                            <th className="text-right">$ {price.toFixed(2)}</th>
                        </tr>
                        <tr>
                            <th className="text-left">Total</th>
                            <th className="text-right">$ <span id="finalTotalPrice">{shippingAndPrice.toFixed(2)}</span></th>
                        </tr>
                    </table>
                    <div className="d-flex align-items-center justify-content-center">
                        <div>
                        <h5 className="text-info">Have any promo code? </h5>
                        </div>
                        <div class="input-group mb-3 w-25 ml-4">
                            <input id="GetPromoCode" type="text" class="form-control" placeholder="Promo Code Here" aria-label="Promo Code Here" aria-describedby="promoButton" />
                            <div class="input-group-append">
                                <button onClick={applyPromoCode} class="btn btn-info" type="button" id="promoButton">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ============ bkash payment section ================= */}
                <div className="p-3">
                    <h3 className="mb-3">Select Payment Method</h3>
                    <input className="mr-2" type="radio" name="bkash" id="bkash" data-toggle="collapse" href="#bkashToggol" role="button" aria-expanded="false" aria-controls="bkashToggol" />

                    <label htmlFor="bkash"><strong>bKash Transfer</strong></label>

                    <div class="collapse" id="bkashToggol">
                        <img style={{ width: '100%' }} className="img-fluid rounded" src={bkashRouls} alt="bkashRouls" />
                        <div className="form-group mt-3">
                            <h5 className="text-info py-2">bKash Number: <span className="text-danger">+88 01774-062312 (Personal)</span> </h5>
                            <label className="mt-2" htmlFor="bkashNumber"><strong>bKash Number</strong></label>
                            <input className="form-control w-50 form-control-lg" placeholder="bKash Number" type="tel" name="" id="bKashNumber" required />
                            <label className="mt-2" htmlFor="transactionId"><strong>bKash transaction ID</strong></label>
                            <input className="form-control w-50 form-control-lg" placeholder="bKash transaction ID" type="tel" name="" id="transactionId" required />
                        </div>
                    </div>

                    {/* ============ terms and conditions ================= */}
                    <h6><label htmlFor="terms" className="mt-3"><input type="checkbox" name="" id="terms" required /> I have read and agree to the website <Link to="termsAndService" className="text-danger">terms and conditions *</Link></label></h6>
                    <div className="text-right my-5 pr-3">
                        {/* <Link to="/orderComplete"> */}
                        <button className="btn btn-success btn-lg p-2 rounded">Place Order</button>
                        {/* </Link> */}
                    </div>

                </div>
            </form>}
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;