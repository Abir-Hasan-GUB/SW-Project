import React from 'react';

const ReviewItems = (props) => {
    const {name, quantity} = props.product;
    return (
        <div className="container">
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <br/>
            <button>Remove</button>
        </div>
    );
};

export default ReviewItems;