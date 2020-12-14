import React from 'react';
document.title="Products"; // Chenge title

const Product = (props) => {
    const { img, name, price, seller, stock, star } = props;
    return (
        <div className="span_1_of_2 bg-light">
            <div className="row">
                <div className="col-md-4">
                    <img className="img-fluid rounded" src={img} alt="" />
                </div>
                <div className="col-md-8 pl-4 text-left">
                    <h6 class="product-name p-2 text-primary">{name}</h6>
                    <p class="lead">By: {seller}</p>
                    <p class="m-0 text-danger">Price: $ {price}</p>
                    <p class="m-0 text-success">Available: {stock}</p>
                    <p class="h6">Rating: {star} <small><i class="fas fa-star text-warning"></i></small></p>
                    <button onClick={() => props.handleAddProduct(props)}
                        class="btn btn-warning btn-sm btn-block w-75 my-3">
                        <strong>
                            <i class="fas fa-cart-plus"></i> add to cart
                                    </strong>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;