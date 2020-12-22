import React, { createContext, useState } from 'react';
import fakeData from '../fakeData';
import './Shop.css';
import './grid.css';
import Product from '../Product/Product';
import NavBar from '../NavBar/NavBar';

const Shop = () => {
    const [products, setProducts] = useState(fakeData);
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        const newCart = [...cart, product]; //copy existing cart element
        setCart(newCart); // update cart to new
    }
    return (
        <div className="container">
            <NavBar cart={cart.length}></NavBar>
            {/* <h1 className="text-center sticky-top bg-primary text-light">Cart Items:  {cart.length}</h1> */}
            <div className="row mt-4 mr-0">
                <div className="col-md-8 mt-4">
                    {
                        products.map(product => <Product
                            name={product.name} price={product.price}
                            seller={product.seller} star={product.star}
                            stock={product.stock} img={product.img}
                            handleAddProduct={handleAddProduct} key={product.key}
                        ></Product>)
                    }
                </div>
                <div className="col-md-4 my-5">
                    <div className="shopingCard position-fixed">
                        <div className="card-top">
                            <div className="card">
                                <div className="card-header text-center">
                                    <h3>Checkout Summary ({cart.length})</h3>
                                </div>
                                <div className="card-body ">
                                    <div className="card-text ">
                                        <div className="sub-total d-flex justify-content-between">
                                            <h5>Subtotal</h5>
                                            <h5>$ {0}</h5>
                                        </div>
                                        <hr />
                                        <div className="sub-total d-flex justify-content-between">
                                            <h5>Shiping</h5>
                                            <h5>$ {50}</h5>
                                        </div>
                                        <hr />
                                        <div className="sub-total d-flex justify-content-between">
                                            <h5>Total</h5>
                                            <h5>$ {0}</h5>
                                        </div>
                                        <hr />
                                        <div className="sub-total d-flex justify-content-between">
                                            <h5>Payable Total</h5>
                                            <h5>$ {0}</h5>
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
                                                    <input type="text" class="form-control form-control-lg" placeholder="Promo Code" aria-label="Promo Code" aria-describedby="button-addon2" />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-success" type="button" id="button-addon2">Apply</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;