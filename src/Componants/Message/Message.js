import React from 'react';
import DashBoardTop from '../AdminPanel/DashBoardTop/DashBoardTop';
import ClienDashBoardMenu from '../ClientDashBoardMenu/ClienDashBoardMenu';

const Message = () => {
    return (
        <div className="container">
        <div className="row mx-0">
            <div className="col-md-3 dashBoardMenu bg-dark px-0">
                <ClienDashBoardMenu></ClienDashBoardMenu>
            </div>
            <div className="col-md-9 dashBoardMainDiv px-0" style={{ height: '100vh', backgroundColor: '#dadadb'}}>
                <DashBoardTop></DashBoardTop>
                <div className="reviews row ml-0 mr-0">
                <h5 className="text-primary py-2">SEND A MESSEGE</h5>
                        <div className="col-md-11 p-3 bg-light my-3 makeAdminDiv pr-0 pl-0">
                           <form action="">
                           <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <h6><label htmlFor="productName">Name</label></h6>
                                        <input placeholder="Your Name"className="form-control form-control-lg" type="text" name="" id="productName" rounded required/>
                                    </div>
                                    <div className="form-group">
                                        <h6><label htmlFor="company">Email</label></h6>
                                        <input className="form-control form-control-lg" type="email" name="" id="company" placeholder="Your Email" rounded required/>

                                    </div>
                                    <div className="form-group">
                                        <h6><label htmlFor="description">Your Message</label></h6>
                                        <textarea className="form-control form-control-lg" name="" placeholder="Type Your Message" id="description" cols="30" rows="5"  rounded required></textarea>

                                    </div>
                                </div>
                                
                            </div>
                            <div className="adminBtn  d-flex justify-content-center my-3">
                           <input className="btn btn-success btn-lg btn-block w-75" type="submit" value="Send Message"/>
                           </div>
                           </form>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    );
};

export default Message;