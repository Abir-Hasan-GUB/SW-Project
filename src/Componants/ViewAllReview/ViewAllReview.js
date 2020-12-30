import React, { useContext, useEffect, useState } from 'react';
import DashBoardTop from '../AdminPanel/DashBoardTop/DashBoardTop';
import DashBoardMenu from '../DashBoardMenu/DashBoardMenu';
import noReview from '../../images/no-review-found.png';
import Footer from '../Footer/Footer';
import './ViewAllReview.css';
import wrongImg from '../../images/wrong.png';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const ViewAllReview = () => {
    const [review, setReview] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:5000/allReviewInAdmin/`)
            .then(response => response.json())
            .then(result => setReview(result))
    }, [])
    // console.log(review)

    // ================= Delete an review using id ==============
    const handleDeleteReview = (id) => {
        // console.log(id)
        fetch(`http://localhost:5000/deleteOneReview/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(result => {
                if (result.deletedCount) {
                    alert("Delete on Item of Review !")
                }
            })
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
            {adminCheck === true && <div className="row mx-0">
                <div className="col-md-3 dashBoardMenu bg-dark px-0">
                    <DashBoardMenu></DashBoardMenu>
                </div>
                <div className="col-md-9 dashBoardMainDiv px-0">
                    <DashBoardTop></DashBoardTop>
                    <div className="reviews row bg-light ml-0 mr-0">
                        <div className="col-md-12 pr-0 pl-0" style={{ height: '632px', overflow: 'scroll' }}>
                            <table class="table table-striped table-hover text-center">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Comments</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                {review.length > 0 && <tbody>
                                    {
                                        review.map(rv => <tr>
                                            <td>{rv.name}</td>
                                            <td>{rv.comment}</td>
                                            <td>{rv.time}</td>
                                            <td><button onClick={() => handleDeleteReview(rv._id)} className="btn btn-danger" name="Reviewdelete" data-toggle="tooltip" data-placement="left" title="Delete this Review"><i class="text-light fas fa-trash-alt"></i></button></td>
                                        </tr>
                                        )
                                    }
                                </tbody>}
                                {review.length <= 0 && 
                                <div className="noReview ml-5 pl-5 mt-5">
                                    <img className="img-fluid" src={noReview} alt="noReview"/>
                                </div>
                                }
                            </table>
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

export default ViewAllReview;