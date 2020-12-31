import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import DashBoardTop from '../AdminPanel/DashBoardTop/DashBoardTop';
import DashBoardMenu from '../DashBoardMenu/DashBoardMenu';
import Footer from '../Footer/Footer';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleMakeAdmin = (e) => {
       let email = document.getElementById('adminMail').value;

        let addAdmin = { //recive all product information
            role: 'admin',
            createdDate: new Date(),
            email: email,
            assignByAdminMail: loggedInUser.email,
            assignByAdminName: loggedInUser.name,
            assignByAdminPicture: loggedInUser.photo
        }

        fetch('http://localhost:5000/makeAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addAdmin) // send information to dateabase
        })
            .then(response => response.json())
            .then(success => {
                if (success.insertedCount) {
                    alert("One Admin Added !");
                    document.getElementById('adminMail').value = '';
                }
            })
        e.preventDefault();
    }

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
                    <form className="admin-form" onSubmit={handleMakeAdmin}>
                        <div className="form-group mt-5">
                           <h4> <label htmlFor="adminMail">Enter Admin Mail</label></h4>
                            <input placeholder="Enter Upcoming Admin Mail" className="form-control rounded form-control-lg w-100" type="email" name="" id="adminMail" required/>
                           <div className="adminBtn  d-flex justify-content-center my-5">
                           <input className="btn btn-success btn-lg btn-block w-50" type="submit" value="Add Admin"/>
                           </div>
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

export default MakeAdmin;