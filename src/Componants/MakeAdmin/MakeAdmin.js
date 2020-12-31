import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import DashBoardTop from '../AdminPanel/DashBoardTop/DashBoardTop';
import DashBoardMenu from '../DashBoardMenu/DashBoardMenu';
import Footer from '../Footer/Footer';
import searching from '../../images/searching-gif.gif';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAllAdmin] = useState([]);

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

    // all admin load form database
    useEffect(() => {
        fetch('http://localhost:5000/allAdmin/')
            .then(response => response.json())
            .then(data => setAllAdmin(data))
    }, [])

    // Handle remove admin
    const handleRemoveAdmin = (id) => {
        fetch(`http://localhost:5000/deleteOneAdmin/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(result => {
                if (result.deletedCount) {
                    alert("Remove one Admin !")
                }
            })
    }


    return (
        <div className="container">
            <div className="row ml-0 mr-0">
                <div className="col-md-3 dashBoardMenu bg-dark px-0">
                    <DashBoardMenu></DashBoardMenu>
                </div>
                <div className="col-md-9 dashBoardMainDiv px-0" style={{ height: '700px', backgroundColor: '#dadadb' }}>
                    <DashBoardTop></DashBoardTop>
                    <div className="reviews row ml-0 mr-0 ">
                        <div className="col-md-11 makeAdminDiv bg-light mt-3">
                            <form className="admin-form" onSubmit={handleMakeAdmin}>
                                <div className="form-group mt-5">
                                    <h4> <label htmlFor="adminMail">Enter Admin Mail</label></h4>
                                    <input placeholder="Enter Upcoming Admin Mail" className="form-control rounded form-control-lg w-100" type="email" name="" id="adminMail" required />
                                    <div className="adminBtn  d-flex justify-content-center my-5">
                                        <input className="btn btn-success btn-lg btn-block w-50" type="submit" value="Add Admin" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div id="adminList">
                                    <div style={{ overflow: 'scroll', height: '250px', margin: '0 auto', width: '700px' }} className="ml-5 mt-4 bg-light">
                                        {admin.length > 0 && <h6 className="text-center text-info my-2"><strong>---Admin List---</strong></h6>}
                                        {/* ============== Admin navigation menu bar ================= */}
                                        {admin.length > 0 && <div className="mb-2">

                                            <div className="row mx-0 mb-2 d-flex align-items-center bg-dark py-2 text-light">

                                                <div className="col-md-4 text-center">
                                                    <h6>Admin Email</h6>
                                                </div>
                                                <div className="col-md-4 text-center">
                                                    <h6>Associate By</h6>
                                                </div>
                                                <div className="col-md-4">
                                                    <h6 className="text-right mr-3">Action</h6>
                                                </div>


                                            </div>
                                        </div>}

                                        {
                                            admin.map(admin => <div className="px-3 mb-2">
                                                <div className="row d-flex align-items-center">
                                                    <div className="col-md-4 text-center">
                                                        <h6 style={{ fontSize: '12px' }}>{admin.email}</h6>
                                                    </div>
                                                    <div className="col-md-4 text-center">
                                                        <h6 style={{ fontSize: '12px' }}>{admin.assignByAdminName}</h6>
                                                    </div>
                                                    <div className="col-md-4 text-right">
                                                        <button onClick={() => handleRemoveAdmin(admin._id)} className=" btn-sm btn btn-danger">Remove</button>
                                                    </div>

                                                </div>
                                            </div>)
                                        }



                                        {admin.length === 0 && <div className="notFoundSearch">
                                            <img style={{ width: "100%", height: "250px" }} src={searching} alt="searching gif" />
                                            <p className="notFoundText text-danger">Not Found Any admin</p>
                                        </div>}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MakeAdmin;