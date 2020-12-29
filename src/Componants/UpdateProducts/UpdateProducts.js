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
                                        <button data-toggle="modal" data-target="#updatePriceModal" className="btn btn-info btn-md">Update</button>
                                    </div>

                                </div>

                                )
                            }

                            {/* <button data-toggle="modal" data-target="#exampleModal" class="list-group-item list-group-item-action mt-3 bg-dark text-light"> <i class="fas fa-sign-out-alt mr-2"></i> Log Out</button> */}

                            {/* ==================== Log Out Confarmation Modal Start ================= */}

                            <div class="modal fade" id="updatePriceModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Update Product Information</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <div className="form-group">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label htmlFor="price"><strong className="text-info">Give Updated Price</strong></label>
                                                            <input placeholder="New Price" className="form-control form-control-lg" type="number" name="" id="price" required />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="stock"><strong className="text-info">Give Updated Stock</strong></label>
                                                            <input placeholder="Stock Number" className="form-control form-control-lg round" type="number" name="" id="stock" required />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ==================== Log Out Confarmation Modal End ================= */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateProducts;