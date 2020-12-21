import React from 'react';
import './Statistics.css';
import welcomeProfileImg from "../../images/dashboard/profile-img.png";
import proPic from "../../images/dashboard/abir.JPG";

const Statistics = () => {

    return (
        <div className="container">
            <div className="row dashBoardHeight">
                {/* <div className="col-md-3 dashBoardMenu bg-dark px-0">
                    <AdminPanel></AdminPanel>
                </div> */}
                <div className="col-md-12 dashBoardMainDiv ">
                    <div className="">
                        <h5 className="text-primary py-2">DASHBOARD</h5>
                        <div className="welcome-back">
                            <div className="row ">
                                <div className="col-md-5 mt-2 dasBody pr-0 pl-md-2 pl-0">
                                    <div className="row ml-0 mr-0 bg-dark">
                                        <div className="col-md-7 text-light pb-3 pt-3">
                                            <h5>Welcome Back !</h5>
                                            <h6>Abir Hasan</h6>
                                        </div>
                                        <div className="col-md-5">
                                            <img className="img-fluid" src={welcomeProfileImg} alt="welcome" />
                                        </div>
                                    </div>
                                    <div className="welcomeProfile bg-light">
                                        <div className="row p-2">
                                            <div className="col-md-6">
                                                <img className="img-fluid proPicofDshB" src={proPic} alt="profile pic" />
                                                <h6 className="pt-2">Abir Hasan</h6>
                                                <p>Full-Stack Devoloper</p>
                                            </div>
                                            <div className="col-md-3 p-3">
                                                <h5>125</h5>
                                                <small><strong>Projects</strong></small>
                                            </div>
                                            <div className="col-md-3 p-3">
                                                <h5>$1025</h5>
                                                <small><strong>Revenue</strong></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 ml-md-3 mb-2 mt-2 d-flex orderCount justify-content-between align-items-center">
                                    <div>
                                        <p className="m-0"><strong>Orders</strong></p>
                                        <h5>1,225</h5>
                                    </div>
                                    <i class="far fa-copy bg-primary text-white" style={{ lineHeight: "40px" }}></i>
                                </div>

                                <div className="col-md-3 mt-2 d-flex orderCount justify-content-between align-items-center ml-md-4">
                                    <div>
                                        <p className="m-0"><strong>Revenue</strong></p>
                                        <h5>$35, 723</h5>
                                    </div>
                                    <i class="far fa-copy bg-primary text-white" style={{ lineHeight: "40px" }}></i>
                                </div>
                               
                            </div>

                        </div>
                    </div>

                    
                </div>
                {/* =============== Monthly Income PIE Chart =================
                <div className="pieChart bg-warning row ml-0">
                        <div className="col-md-4">
                            <PieCharts></PieCharts>
                        </div>
                    </div> */}
            </div>
            
        </div>
    );
};

export default Statistics;