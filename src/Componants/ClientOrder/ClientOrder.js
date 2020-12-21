import React from 'react';
import DashBoardTop from '../AdminPanel/DashBoardTop/DashBoardTop';
import ClienDashBoardMenu from '../ClientDashBoardMenu/ClienDashBoardMenu';
import cardImg from '../../images/banner1.jpg';

const ClientOrder = () => {
    return (
        <div className="container">
        <div className="row mx-0">
            <div className="col-md-3 dashBoardMenu bg-dark px-0">
                <ClienDashBoardMenu></ClienDashBoardMenu>
            </div>
            <div className="col-md-9 dashBoardMainDiv px-0" style={{ height: '100vh', backgroundColor: '#dadadb'}}>
                <DashBoardTop></DashBoardTop>
                <div className="reviews row ml-0 mr-0">
                <h5 className="text-primary py-2">Your Order</h5>
                        <div className="col-md-11 p-3 bg-light my-3 makeAdminDiv pr-0 pl-0">
                          
                           <div className="row">
                                <div className="col-md-12">
                                    <div className="row d-flex justify-content-between">
                                        <div className="col-md-4">
                                            <div className="card rounded">
                                                <div className="card-body">
                                                    <h3 className="card-title">Order One</h3>
                                                    <div className="card-img">
                                                        <img className="img-fluid mb-2" src={cardImg} alt=""/>
                                                    </div>
                                                    <div className="card-text">
                                                        <p class="lead m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem saepe </p>
                                                    </div>
                                                </div>
                                                <div className="card-button py-2 d-flex justify-content-around">
                                                    <button className="btn btn-danger">Cancel Order</button>
                                                    <button className="btn btn-dark">Status</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                        <div className="card rounded">
                                                <div className="card-body">
                                                    <h3 className="card-title">Order Two</h3>
                                                    <div className="card-img">
                                                        <img className="img-fluid mb-2" src={cardImg} alt=""/>
                                                    </div>
                                                    <div className="card-text">
                                                        <p class="lead m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem saepe </p>
                                                    </div>
                                                </div>
                                                <div className="card-button py-2 d-flex justify-content-around">
                                                    <button className="btn btn-danger">Cancel Order</button>
                                                    <button className="btn btn-dark">Status</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                        <div className="card rounded">
                                                <div className="card-body">
                                                    <h3 className="card-title">Order Three</h3>
                                                    <div className="card-img">
                                                        <img className="img-fluid mb-2" src={cardImg} alt=""/>
                                                    </div>
                                                    <div className="card-text">
                                                        <p class="lead m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem saepe</p>
                                                    </div>
                                                </div>
                                                <div className="card-button py-2 d-flex justify-content-around">
                                                    <button className="btn btn-danger">Cancel Order</button>
                                                    <button className="btn btn-dark">Status</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
            </div>
        </div>
    </div>
    );
};

export default ClientOrder;