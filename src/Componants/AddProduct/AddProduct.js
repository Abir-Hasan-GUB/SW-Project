import React from 'react';
import DashBoardTop from '../AdminPanel/DashBoardTop/DashBoardTop';
import DashBoardMenu from '../DashBoardMenu/DashBoardMenu';
import Footer from '../Footer/Footer';

const AddProduct = () => {
// add product to database
    // const handleAddProduct = () => {
    //     fetch('http://localhost:5000/addProdcuct',{
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify("revicved info")
    //     })
    // }


    return (
        <div className="container">
        <div className="row mx-0">
            <div className="col-md-3 dashBoardMenu bg-dark px-0">
                <DashBoardMenu></DashBoardMenu>
            </div>
            <div className="col-md-9 dashBoardMainDiv px-0" style={{ height: '700px', backgroundColor: '#dadadb'}}>
                <DashBoardTop></DashBoardTop>
                <div className="reviews row ml-0 mr-0">
                <h5 className="text-primary py-2">ADD PRODUCT</h5>
                        <div className="col-md-11 p-3 bg-light my-3 makeAdminDiv pr-0 pl-0">
                           <form action="">
                           <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <h6><label htmlFor="productName">Product Name</label></h6>
                                        <input placeholder="Product Name"className="form-control" type="text" name="" id="productName" rounded required/>

                                    </div>
                                    <div className="form-group">
                                        <h6><label htmlFor="company">Company Name</label></h6>
                                        <input className="form-control" type="text" name="" id="company" placeholder="Company Name" rounded required/>

                                    </div>
                                    <div className="form-group">
                                        <h6><label htmlFor="description">Description</label></h6>
                                        <textarea className="form-control" name="" placeholder="Enter product description" id="description" cols="30" rows="5"  rounded required></textarea>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                        <h6><label htmlFor="Price">Price</label></h6>
                                        <input type="number" className="form-control" name="" placeholder="Price" id="Price"  rounded required/>

                                    </div>
                                    <div className="form-group">
                                        <h6><label htmlFor="availableNumber">Available Number</label></h6>
                                        <input type="number" className="form-control" name="" placeholder="Available Number" id="availableNumber"  rounded required/>

                                    </div>
                                    <div className="form-group">
                                        <h6><label htmlFor="rating">Rating</label></h6>
                                        <input type="number" className="form-control" name="" placeholder="Rating" id="rating"  rounded required/>

                                    </div>
                                    <div className="form-group">
                                        <h6><label htmlFor="productPicture">Picture</label></h6>
                                        <input type="file" className="form-control" name="" placeholder="Rating" id="productPicture"  rounded required/>

                                    </div>
                                </div>
                            </div>
                            <div className="adminBtn  d-flex justify-content-center my-3">
                           <input className="btn btn-success btn-lg btn-block w-50" type="submit" value="Add Product"/>
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