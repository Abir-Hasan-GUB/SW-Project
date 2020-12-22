import React from 'react';
import DashBoardTop from '../AdminPanel/DashBoardTop/DashBoardTop';
import DashBoardMenu from '../DashBoardMenu/DashBoardMenu';
import './MakeAdmin.css';

const MakeAdmin = () => {
    return (
        <div className="container">
            <div className="row ml-0 mr-0">
                <div className="col-md-3 dashBoardMenu bg-dark px-0">
                    <DashBoardMenu></DashBoardMenu>
                </div>
                <div className="col-md-9 dashBoardMainDiv px-0" style={{ height: '700px', backgroundColor: '#dadadb'}}>
                    <DashBoardTop></DashBoardTop>
                    <div className="reviews row ml-0 mr-0 ">
                   <h5 className="text-primary py-2">MAKE ADMIN</h5>
                   <div className="col-md-11 makeAdminDiv bg-light mt-3">
                    <form className="admin-form">
                        <div className="form-group mt-5">
                           <h4> <label htmlFor="adminMail">Enter Admin Mail</label></h4>
                            <input placeholder="Enter Upcoming Admin Mail" className="form-control form-control-lg w-100" type="email" name="" id="adminMail" rounded required/>
                           <div className="adminBtn  d-flex justify-content-center my-5">
                           <input className="btn btn-success btn-lg btn-block w-50" type="submit" value="Add Admin"/>
                           </div>
                        </div>
                    </form>
                   </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;