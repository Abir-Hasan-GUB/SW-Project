import React, { useEffect, useState } from 'react';
import fakeData from '../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';
import { getDatabaseCart } from '../utilities/databaseManager';

const ReviewOrder = () => {
    const [cart,setCart] = useState([]);

    useEffect(() =>{// load data from database(sesion storage)
        const savedCart = getDatabaseCart();
        // find all product keys from seson database using "Objects.keys" method 
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(keys => {
            const product = fakeData.find(pd => pd.key === keys);
            product.quantity = savedCart[keys]; // add product quantity
            return product;
        });
        setCart(cartProducts);
    },[])

    return (
        <div>
            <h1>Cart Items {cart.length}</h1>
            {
                cart.map(pd => <ReviewItems key={pd.key} product={pd}></ReviewItems>)
            }
        </div>
    );
};

export default ReviewOrder;