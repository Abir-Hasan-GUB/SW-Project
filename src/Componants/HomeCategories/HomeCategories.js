import React from 'react';
import './HomeCategories.css';
import laptop from '../../images/laptop.png';
import watch from '../../images/watch.png';
import mobile from '../../images/mobile.png';
import { Link } from 'react-router-dom';


const HomeCategories = () => {
    return (
        <div id="category" className="container bg-dark cnt">
            <div className="serviceTitle text-light pt-5 text-center">
                <h2>Products <span className="text-warning"> Category</span></h2>
            </div>
            <div class="row  py-5 px-3">
                <div class="col-lg-4">
                    <div class="cat1 d-flex justify-content-between align-items-center">
                        <h1>Watch</h1>
                        <img className="img-fluid catImg" src={watch} alt="watch" />
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="cat2 d-flex justify-content-between align-items-center text-light">
                        <h1>Laptop</h1>
                        <img className="img-fluid catImg" src={laptop} alt="laptop" />
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="cat3 d-flex justify-content-between align-items-center text-light">
                        <h1>Phone</h1>
                        <img className="img-fluid catImg" src={mobile} alt="mobile" />
                    </div>
                </div>
            </div>
            <div className="browesAllProduct text-center">
                <Link to="/products"><button className="btn btn-success btn-lg"><h3>See All Products</h3></button></Link>
            </div>
        </div>
    );
};

export default HomeCategories;