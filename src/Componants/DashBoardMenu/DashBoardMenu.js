import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';

const DashBoardMenu = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState([]);
    let role = "admin";
    const suparAdmin = "abirhasan6111@gmail.com";
    let adminCheck = false;

    // load all admin 
    useEffect(() => {
        fetch('http://localhost:5000/findAdmin?role=' + role)
            .then(response => response.json())
            .then(data => setAdmin(data))
    }, [])


    for (let i = 0; i < admin.length; i++) {
        let user = admin[i];
        if (user.role === role && user.email == loggedInUser.email) {
            adminCheck = true;
        }
    }


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
                        {loggedInUser.email === suparAdmin && <Link to="/makeAdmin"><button type="button" class="list-group-item list-group-item-action mt-3 bg-dark text-light"> <i class="fas fa-sign-out-alt mr-2"></i> Make Admin</button></Link>}
                        <Link to="/dailySell"><button type="button" class="list-group-item list-group-item-action mt-3 bg-dark text-light"><i class="far fa-calendar-alt mr-2"></i> Daily Sell</button></Link>
                        <Link to="/updateProduct"><button type="button" class="list-group-item list-group-item-action mt-3 bg-dark text-light"> <i class="fas fa-edit mr-2"></i> Update Product</button></Link>

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
                                        <button onClick={() => setLoggedInUser({})} type="button" class="btn btn-success">Confirm</button>
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