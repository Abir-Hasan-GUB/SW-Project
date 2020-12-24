import React from 'react';
import placeOrder from '../../images/place order.gif';

const PlaceOrder = () => {
    return (
        <div className="container">
            <img style={{width: '100%', height: '100%'}} src={placeOrder} alt="place order"/>
        </div>
    );
};

export default PlaceOrder;