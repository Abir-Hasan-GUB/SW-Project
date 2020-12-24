import React from 'react';
import './ReviewItems.css';

const ReviewItems = (props) => {
    const {name, quantity, img, seller, price, key} = props.product;
    return (
        <div className="container bg-light">
           <div className="row cartReviewRow">
               <div className="col-md-3 cartReviewImg">
                    <img src={img} alt={name}/>
               </div>
               <div className="col-md-9 py-3 pr-5">
                   <h6>{name}</h6>
                  <div className="d-flex justify-content-between">
                  <p className="lead py-2">By: {seller}</p>
                  <h5>$ {price}</h5>
                  </div>
                  <h6>Quantity: {quantity}</h6>
                  <button onClick={()=> props.removeProduct(key)} className="btn text-light my-3 btn-danger"><i class="far fa-trash-alt"> Remove</i></button>
               </div>
           </div>
        </div>
    );
};

export default ReviewItems;