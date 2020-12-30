import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import DashBoardTop from '../AdminPanel/DashBoardTop/DashBoardTop';
import DashBoardMenu from '../DashBoardMenu/DashBoardMenu';
import Footer from '../Footer/Footer';
import './MakeAdmin.css';
import wrongImg from '../../images/wrong.png';
import { Link } from 'react-router-dom';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleMakeAdmin = (e) => {
       let email = document.getElementById('adminMail').value;

        let addAdmin = { //recive all product information
            role: 'admin',
            createdDate: new Date(),
            email: email
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

       // ======================== Check Admin =================
       const [admin, setAdmin] = useState([]);
       let role = "admin";
   
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
        <div className="container">
            { adminCheck === true && <div className="row ml-0 mr-0">
                <div className="col-md-3 dashBoardMenu bg-dark px-0">
                    <DashBoardMenu></DashBoardMenu>
                </div>
                <div className="col-md-9 dashBoardMainDiv px-0" style={{ height: '710px', backgroundColor: '#dadadb'}}>
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
            </div>}
            {adminCheck == false &&
                <div className="bg-light text-center p-3">
                    <img className="img-fluid" src={wrongImg} alt="wrongImg" />
                    <h1 className="text-danger py-4">Wrong Information</h1>
                    <Link to="/"><button className="btn btn-danger btn-lg p-3 mt-3">Back to Home Page</button></Link>
                </div>}
            <Footer></Footer>
        </div>
    );
};

export default MakeAdmin;