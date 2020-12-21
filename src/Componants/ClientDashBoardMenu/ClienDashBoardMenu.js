import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png';

const ClienDashBoardMenu = () => {
    return (
        <div className="dashBoardMenu bg-dark px-0">
            <div className="row mx-0">
                <div className="col-md-12 m-0 px-0 dashBoardLogo bg-light">
                    <Link to="/"><img className="img-fluid dashLogo" src={logo} alt="logo" /></Link>
                </div>
                <div className="menu col-md-12 px-0 text-center">
                    <div class="list-group mt-5">
                        <Link to="/clientOrder"> <button type="button" class="list-group-item list-group-item-action bg-dark text-light"> <i class="fas fa-sort-alpha-up-alt mr-2"></i> Order</button></Link>
                        <Link to="/feedBack"><button type="button" class="list-group-item list-group-item-action mt-3 bg-dark text-light"> <i class="far fa-comments mr-2"></i> Feedback</button></Link>
                        <Link to="/message"><button type="button" class="list-group-item list-group-item-action mt-3 bg-dark text-light"> <i class="far fa-envelope mr-2"></i> Messege</button></Link>
                        <button data-toggle="modal" data-target="#forgotPasswordModal" type="button" class="list-group-item list-group-item-action mt-3 bg-dark text-light"> <i class="fas fa-sign-out-alt mr-2"></i> Log Out</button>

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

export default ClienDashBoardMenu;