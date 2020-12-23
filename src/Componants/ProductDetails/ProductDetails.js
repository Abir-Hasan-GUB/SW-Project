import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData';
import NavBar from '../NavBar/NavBar';
import './ProductDetails.css';

const ProductDetails = () => {
    const {productKey} = useParams();//recive product key
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product)
    return (
        <div className="container">
            <NavBar></NavBar>
            <div className="row mt-5">
                <div className="col-md-6 mt-4">
                    <img className="img-fluid productImg"src={product.img} alt={product.name}/>
                </div>
                <div className="col-md-6 mt-4 bg-light">
                    <h4>{product.name}</h4>
                    <div className="row mt-3">
                        <div className="col-md-6">
                        <ul className="pl-3 productDetailsPoint1">
                        <li>Price</li>
                        <li>Reguler Price</li>
                        <li>Stock</li>
                        <li>Product Code</li>
                        <li>Brand</li>
                        <li>MPN</li>
                    </ul>
                        </div>
                        <div className="col-md-6 productDetailsPoint2">
                        <ul className = "list-unstyled">
                        <li>{product.price}</li>
                        <li>{product.price+12}</li>
                        <li>{product.stock}</li>
                        <li>{parseInt(product.price*12.2)}</li>
                        <li>{product.seller}</li>
                        <li>{product.key}</li>
                    </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;