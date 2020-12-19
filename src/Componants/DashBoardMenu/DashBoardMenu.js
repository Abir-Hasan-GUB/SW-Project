import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import Calender from '../Calender/Calender';

const DashBoardMenu = () => {
    return (
        <div className="dashBoardMenu bg-dark px-0">
            <div className="row mx-0">
                <div className="col-md-12 m-0 px-0 dashBoardLogo bg-light">
                    <Link to="/"><img className="img-fluid dashLogo" src={logo} alt="logo" /></Link>
                </div>
                <div className="menu col-md-12 px-0 text-center">
                    <div class="list-group mt-5">
                        <Link to="/statistics"> <button type="button" class="list-group-item list-group-item-action bg-dark text-light"> <i class="fas fa-chart-line mr-2"></i> Statistics</button></Link>
                        <Link to="/ViewAllReviews"><button type="button" class="list-group-item list-group-item-action mt-3 bg-dark text-light"> <i class="fas fa-border-all mr-2"></i> View All Reviews</button></Link>
                        <Link to="/orderList"><button type="button" class="list-group-item list-group-item-action mt-3 bg-dark text-light"> <i class="fas fa-luggage-cart mr-2"></i> Order List</button></Link>
                        <Link to="/addProduct"><button type="button" class="list-group-item list-group-item-action mt-3 bg-dark text-light"> <i class="far fa-plus-square mr-2"></i> Add Product</button></Link>
                        <Link to="/makeAdmin"><button type="button" class="list-group-item list-group-item-action mt-3 bg-dark text-light"> <i class="fas fa-user-plus"></i> Make Admin</button></Link>

                        {/* ============= Calender Accordion Start ==========  */}
                        <div class="accordion" id="showCalender">
                            <div>
                                <div class="mb-0">
                                    <button class="list-group-item list-group-item-action mt-3 bg-dark text-light" type="button" data-toggle="collapse" data-target="#calender" aria-expanded="true" aria-controls="calender"> <i class="far fa-calendar-alt mr-2"></i> Daily Sell</button>
                                </div>
                                <div id="calender" class="collapse" aria-labelledby="headingOne" data-parent="#showCalender">
                                    <div class="">
                                        {/* calender here  */}
                                        <Calender></Calender>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ============= Calender Accordion End ==========  */}
                        <button data-toggle="modal" data-target="#forgotPasswordModal" type="button" class="list-group-item list-group-item-action mt-3 bg-dark text-light"> <i class="fas fa-user-plus"></i> Log Out</button>

                        {/* ==================== Log Out Confarmation Modal Start ================= */}

                        <div class="modal fade" id="forgotPasswordModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title h3 text-danger" id="exampleModalCenterTitle">Are You sure you want to log out?</h1>

                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Decline</button>
                                        <button type="button" class="btn btn-success">Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ==================== Log Out Confarmation Modal End ================= */}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardMenu;