import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import DashBoardTop from '../AdminPanel/DashBoardTop/DashBoardTop';
import DashBoardMenu from '../DashBoardMenu/DashBoardMenu';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // add product to database
    const handleAddProduct = (e) => {
        let productName = document.getElementById('pdName').value;
        let productPrice = document.getElementById('pdPrice').value;
        let productKey = document.getElementById('pdKey').value;
        let company = document.getElementById('pdCompany').value;
        let productStock = document.getElementById('pdStock').value;
        let productDescription = document.getElementById('pdDescription').value;
        let productImg = document.getElementById('pdImgLink').value;

        let addProudct = { //recive all product information
            name: productName,
            seller: company,
            price: productPrice,
            admin: loggedInUser.name,
            adminImg: loggedInUser.photo,
            key: productKey,
            stock: productStock,
            description: productDescription,
            img: productImg,
            date: new Date(),
            star: '5'
        }


        fetch('https://creative-agency-abir.herokuapp.com/addProdcuct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addProudct) // send information to dateabase
        })
            .then(response => response.json())
            .then(success => {
                if (success.insertedCount) {
                    alert("One Product Added !");
                    document.getElementById('pdName').value = '';
                    document.getElementById('pdPrice').value = '';
                    document.getElementById('pdKey').value = '';
                    document.getElementById('pdCompany').value = '';
                    document.getElementById('pdStock').value = '';
                    document.getElementById('pdDescription').value = '';
                    document.getElementById('pdImgLink').value = '';
                }
            })
        e.preventDefault();
    }

  
    return (
        <div className="container">
           <div className="row mx-0">
                <div className="col-md-3 dashBoardMenu bg-dark px-0">
                    <DashBoardMenu></DashBoardMenu>
                </div>
                <div className="col-md-9 dashBoardMainDiv px-0" style={{ height: '700px', backgroundColor: '#dadadb' }}>
                    <DashBoardTop></DashBoardTop>
                    <div className="reviews row ml-0 mr-0">
                        <h5 className="text-primary py-2">ADD PRODUCT</h5>
                        <div className="col-md-11 p-3 bg-light my-3 makeAdminDiv pr-0 pl-0">
                            <form onSubmit={handleAddProduct}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <h6><label htmlFor="productName">Product Name</label></h6>
                                            <input placeholder="Product Name" className="form-control rounded" type="text" name="" id="pdName" required />

                                        </div>
                                        <div className="form-group">
                                            <h6><label htmlFor="company">Company Name</label></h6>
                                            <input className="form-control rounded" type="text" name="" id="pdCompany" placeholder="Company Name" required />

                                        </div>
                                        <div className="form-group">
                                            <h6><label htmlFor="description">Description</label></h6>
                                            <textarea className="form-control rounded" name="" placeholder="Enter product description" id="pdDescription" cols="30" rows="5" required></textarea>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <h6><label htmlFor="Price">Price</label></h6>
                                            <input type="number" className="form-control rounded" name="" placeholder="Price" id="pdPrice" required />

                                        </div>
                                        <div className="form-group">
                                            <h6><label htmlFor="availableNumber">Stock</label></h6>
                                            <input type="number" className="form-control rounded" name="" placeholder="Available Number" id="pdStock" required />

                                        </div>
                                        <div className="form-group">
                                            <h6><label htmlFor="rating">Key</label></h6>
                                            <input type="text" className="form-control rounded" name="" placeholder="Product Key" id="pdKey" required />

                                        </div>
                                        <div className="form-group">
                                            <h6><label htmlFor="productPicture">Picture</label></h6>
                                            <input type="text" className="form-control rounded" name="" placeholder="Enter Img URL" id="pdImgLink" required />

                                        </div>
                                    </div>
                                </div>
                                <div className="adminBtn  d-flex justify-content-center my-3">
                                    <input className="btn btn-success btn-lg btn-block w-50" type="submit" value="Add Product" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddProduct;