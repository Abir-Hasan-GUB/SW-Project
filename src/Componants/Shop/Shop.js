import React, { useState } from 'react';
import fakeData from '../fakeData';
import './Shop.css';
import './grid.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState(fakeData);

    const handleAddProduct = (product) => {
        console.log(product);
    }
    return (
        <div className="container">
            <h1>This is shope  {products.length}</h1>
            <div className="row ml-0">
                {
                    products.map(product => <Product
                        name={product.name} price={product.price}
                        seller={product.seller} star={product.star}
                        stock={product.stock} img={product.img}
                        handleAddProduct={handleAddProduct} key={product.key}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Shop;