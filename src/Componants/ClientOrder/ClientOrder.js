import React, { useContext, useEffect, useState } from 'react';
import DashBoardTop from '../AdminPanel/DashBoardTop/DashBoardTop';
import ClienDashBoardMenu from '../ClientDashBoardMenu/ClienDashBoardMenu';
import noOrder from '../../images/noOrderFound.png';
import Footer from '../Footer/Footer';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const ClientOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([]);
    // const [cart, setCart] = useState([]);

      // ================= Delete an order using id ==============
      const cancelOrder = (id) => {
        // console.log(id)
        fetch(`http://localhost:5000/deleteOneOrder/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(result => {
                if (result.deletedCount) {
                    alert("Cancel on Item of Order !")
                }
            })
    }

    useEffect(() => {
        fetch('http://localhost:5000/clientOrder?email=' + loggedInUser.email)
            .then(response => response.json())
            .then(data => setOrder(data))
    }, [])

    return (
        <div className="container">
            <div className="row mx-0">
                <div className="col-md-3 dashBoardMenu bg-dark px-0">
                    <ClienDashBoardMenu></ClienDashBoardMenu>
                </div>
                <div className="col-md-9 dashBoardMainDiv px-0" style={{ height: '700px', backgroundColor: '#fff', overflow: 'scroll' }}>
                    <DashBoardTop></DashBoardTop>
                    <div className="reviews row ml-0 mr-0">

                        <div className="col-md-11 p-3 bg-light my-3 makeAdminDiv pr-0 pl-0">


                            {loggedInUser.name &&
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row">
                                            {
                                                order.map(order => <div className="col-md-12 mb-3">
                                                    <div className="card rounded">
                                                        <div className="card-body">
                                                            <h4>Your Order ID: <span className="text-success">{order._id}</span> ({order.cart.length} items)</h4>
                                                            <div className="d-flex justify-content-around my-3">
                                                                {order.status == "pending" && <h6 id="orderStatus" style={{ border: '2px solid red', background: 'red', color: '#fff' }} className=" pl-4 py-2 pr-4 mb-3" >{order.status}</h6>}

                                                                {order.status == "On Going" && <h6 id="orderStatus" style={{ border: '2px solid #ffc107', background: '#ffc107', color: '#000' }} className=" pl-4 py-2 pr-4 mb-3" >{order.status}</h6>}

                                                                {order.status == "Done" && <h6 id="orderStatus" style={{ border: '2px solid green', background: 'green', color: '#fff' }} className=" pl-4 py-2 pr-4 mb-3" >{order.status}</h6>}

                                                                {order.status == "pending" && <button onClick={() => cancelOrder(order._id)} style={{ height: '40px', border: '2px solid red', background: 'red', color: '#fff' }} className="btn btn-danger btn-sm"><strong>Cancel order</strong></button>}
                                                            </div>
                                                            <div className="card-text text-center">
                                                                <h4 class="my-2 m-0">Coustomer: {order.name} </h4>
                                                                <h5 className="my-2">Order Date: {order.date}</h5>
                                                                <h5 class="text-danger my-2">Total Price: $ {order.price} </h5>
                                                                <h5 class="text-primary my-2">Payment-Method: {order.paymentMethod}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                            }
                                        </div>
                                    </div>

                                </div>
                            }

                            {!loggedInUser.name &&<div>
                                <img className="img-fluid" src={noOrder} alt="noOrder" />
                                <div className="text-center">
                                    <Link to="/products"><button className="btn btn-lg btn-warning my-3 text-dark">Back to Shop</button></Link>
                                </div>
                            </div>

                            }
                             {order.length === 0 && loggedInUser.name &&<div>
                                <img className="img-fluid" src={noOrder} alt="noOrder" />
                                <div className="text-center">
                                    <Link to="/products"><button className="btn btn-lg btn-warning my-3 text-dark">Back to Shop</button></Link>
                                </div>
                            </div>

                            }

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ClientOrder;