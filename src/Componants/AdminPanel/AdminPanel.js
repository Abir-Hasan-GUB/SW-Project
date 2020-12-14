import React from 'react';
import './AdminPanel.css';
import logo from '../../images/logos/logo.png';
import Statistics from '../Statistics/Statistics';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
    return (
        <div className="container">
            <div className="row mx-0">
                <div className="col-md-3 dashBoardMenu bg-dark px-0">
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
                                          <button class="list-group-item list-group-item-action mt-3 bg-dark text-light" type="button" data-toggle="collapse" data-target="#calender" aria-expanded="true" aria-controls="calender"> <i class="far fa-calendar-alt mr-2"></i> Calender</button>
                                        </div>
                                        <div id="calender" class="collapse" aria-labelledby="headingOne" data-parent="#showCalender">
                                            <div class="">
                                                {/* calender here  */}
                                                <h1 className="text-warning">Calender</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ============= Calender Accordion End ==========  */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 dashBoardMainDiv px-0">
                    <div className="dashBoardBar bg-primary">
                    </div>
                    <Statistics></Statistics>
                    
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;