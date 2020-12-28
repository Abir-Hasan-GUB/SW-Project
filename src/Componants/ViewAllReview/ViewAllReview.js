import React, { useEffect, useState } from 'react';
import DashBoardTop from '../AdminPanel/DashBoardTop/DashBoardTop';
import DashBoardMenu from '../DashBoardMenu/DashBoardMenu';
import Footer from '../Footer/Footer';

const ViewAllReview = () => {
 const [review, setReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allReviewInAdmin/`)
            .then(response => response.json())
            .then(result => setReview(result))
            },[])
            console.log(review)

    return (
        <div className="container">
            <div className="row mx-0">
                <div className="col-md-3 dashBoardMenu bg-dark px-0">
                    <DashBoardMenu></DashBoardMenu>
                </div>
                <div className="col-md-9 dashBoardMainDiv px-0">
                    <DashBoardTop></DashBoardTop>
                    <div className="reviews row bg-light ml-0 mr-0">
                        <div className="col-md-12 pr-0 pl-0" style={{ height: '620px', overflow: 'scroll' }}>
                            <table class="table table-striped table-hover text-center">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Comments</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        review.map(rv => <tr>
                                            <td>{rv.name}</td>
                                            <td>{rv.comment}</td>
                                            <td>{rv.time}</td>
                                            <td><i class="text-danger fas fa-trash-alt"></i></td>
                                        </tr>
                                       )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ViewAllReview;