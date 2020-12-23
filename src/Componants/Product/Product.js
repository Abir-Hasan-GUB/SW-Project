import React from 'react';
import { Link } from 'react-router-dom';
// document.title = "Products"; // Chenge title

const Product = (props) => {
    
    const { img, name, price, seller, stock, star, key } = props.product;
    return (
        <div>
            <div className="bg-light row py-4 ml-0">
                <div className="col-md-4 p-4">
                    <img className="img-fluid rounded" src={img} alt="" />
                </div>
                <div className="text-left col-md-8">
                    <h6 class="product-name text-primary"><Link to={"/product/"+key}>{name}</Link></h6>
                    <p class="lead">By: {seller}</p>
                    <p class="text-danger">Price: $ {price}</p>
                    <p class="text-success">Available: {stock}</p>
                    <p class="h6">Rating: {star} <small><i class="fas fa-star text-warning"></i></small></p>
                    <button onClick={() => props.handleAddProduct(props)}
                        class="btn btn-warning btn-sm my-3">
                        <strong>
                            <i class="fas fa-cart-plus"></i> add to cart
                                    </strong>
                    </button>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Product;