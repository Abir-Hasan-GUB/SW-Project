import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    // console.log(props)
    const applyPromoCode = () => {
        let promoCount = 0;
        let promoCode = document.getElementById('promoCode').value;
        let totalPrice = document.getElementById('toalPrice').innerText;
        let mainPrice = totalPrice;
        let reducePrice = mainPrice / 4;
        let updatePrice = totalPrice - reducePrice;

        if (promoCode === 'abir25') {
            ++promoCount;
            console.log('clicked')
            console.log(updatePrice)
            document.getElementById('toalPrice').innerText = updatePrice.toFixed(2);
            document.getElementById('promoCode').value = '';
            if (promoCount) {
                document.getElementById('promoCode').disabled = true;
                alert("Promo Code Added !");
            }
        }
        else {
            alert("Wrong Promo Code !")
        }
    }

    // variable decler
    const cart = props.cart;
    let subTotal = 0;
    // console.log(subTotal)
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        
        subTotal += parseFloat(product.price);
        // debugger
        // subTotal += product.product.price * product.quantity;

    }
    // console.log(cart[0].product.price)
    // console.log('subtotal', subTotal)
    let tax = ((5 * subTotal) / 100).toFixed(2);  // tax calculated
    let shipping = 50; //shipping charge fixed

    // conditionally reduce shipping cost 
    if (subTotal > 250) {
        shipping = 25;
    }

    if (subTotal > 500 || subTotal == 0) {
        shipping = 0;
    }

    let total = parseFloat(parseFloat(subTotal) + parseFloat(shipping)); // shipping charge + total
    // console.log(total)
    let totalPayable = (parseFloat(total) + parseFloat(tax)); //total price with tax + shipping

    return (
        <div className="shopingCard position-fixed container">
            <div className="row col-4">
                <div class="alert alert-info alert-dismissible fade show" role="alert">
                    <strong>Yeah Huu!</strong> If Your shipping <strong>Grether 250</strong> then charge is half. And if <strong> Grether 500</strong> charge totally free..Haha
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="card-top">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>Checkout Summary ({cart.length})</h3>
                        </div>
                        <div className="card-body ">
                            <div className="card-text ">
                                <div className="sub-total d-flex justify-content-between">
                                    <h5>Subtotal</h5>
                                    <h5>$ {subTotal}</h5>
                                </div>
                                <hr />
                                <div className="sub-total d-flex justify-content-between">
                                    <h5>Shiping</h5>
                                    <h5>$ {shipping}</h5>
                                </div>
                                <hr />
                                <div className="sub-total d-flex justify-content-between">
                                    <h5>Total</h5>
                                    <h5>$ {total}</h5>
                                </div>
                                <hr />
                                <div className="sub-total d-flex justify-content-between">
                                    <h5>Vat + Tax <small>(5%)</small> </h5>
                                    <h5>$ {tax}</h5>
                                </div>
                                <hr />
                                <div className="sub-total d-flex justify-content-between">
                                    <h5>Payable Total</h5>
                                    <h5>$ <span id="toalPrice">{totalPayable}</span></h5>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-muted">
                            <div class="accordion" id="accordionExample">

                                <div class="" id="headingOne">
                                    <h2 class="mb-0">
                                        <button class="btn text-dark btn-link btn-block text-center" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <h5> Add Promo code </h5>
                                        </button>
                                    </h2>
                                </div>

                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div class="input-group">
                                            <input id="promoCode" type="text" class="form-control form-control-lg" placeholder="Promo Code" aria-label="Promo Code" aria-describedby="button-addon2" />
                                            <div class="input-group-append">
                                                <button id="promoApplyBtn" onClick={applyPromoCode} class="btn btn-success" type="button" id="button-addon2">Apply</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <Link to="/reviewOrder"><button className="btn btn-info btn-lg text-light btn-block"><h5>Review Your Order</h5></button></Link> */}
                        {
                            props.children // show button as children of cart
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;