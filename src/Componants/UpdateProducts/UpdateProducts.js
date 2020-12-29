import React, { useEffect, useState } from 'react';
import DashBoardTop from '../AdminPanel/DashBoardTop/DashBoardTop';
import DashBoardMenu from '../DashBoardMenu/DashBoardMenu';
import Footer from '../Footer/Footer';

const UpdateProducts = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    // all products load form database
    useEffect(() => {
        fetch('http://localhost:5000/products/')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products)

    return (
        <div className="container">
            <div className="row mx-0">
                <div className="col-md-3 dashBoardMenu bg-dark px-0">
                    <DashBoardMenu></DashBoardMenu>
                </div>
                <div className="col-md-9 dashBoardMainDiv px-0">
                    <DashBoardTop></DashBoardTop>
                    <div className="reviews row bg-light ml-0 mr-0">
                        <div className="col-md-12 pr-2 pl-2" style={{ height: '620px', overflow: 'scroll' }}>
                            {
                                products.map(product => <div className="row my-2 d-flex align-items-center" style={{ borderBottom: '1px solid gray' }}>
                                    <div className="col-md-3">
                                        <img className="img-fluid" src={product.img} alt={product.name} />
                                    </div>
                                    <div className="col-md-5 text-dark">
                                        <h6>{product.name}</h6>
                                    </div>
                                    <div className="col-md-2 text-danger">
                                        <h5>$ {product.price}</h5>
                                    </div>
                                    <div className="col-md-2">
                                        <button className="btn btn-info btn-md">Update</button>
                                    </div>

                                </div>

                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateProducts;