import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import DashBoardTop from '../AdminPanel/DashBoardTop/DashBoardTop';
import DashBoardMenu from '../DashBoardMenu/DashBoardMenu';
import Footer from '../Footer/Footer';
import noOrder from '../../images/noOrderFound.png';
import wrongImg from '../../images/wrong.png';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allOrder, setAllOrder] = useState([]);
    const [status, setStatus] = useState([]);
    const [id, setId] = useState([]);

    // ================ Load all clients order with state =================
    useEffect(() => {
        fetch(`http://localhost:5000/clientAllOrder`,)
            .then(response => response.json())
            .then(result => setAllOrder(result))
    }, [])

    // ================= Update state =================
    const handleUpdateStatus = (id) => {
        const updateStatus = status;
        const afterUpdate = { id, updateStatus };
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(afterUpdate)
        })
            .then(response => response.json())
            .then(data => {
                if (data.modifiedCount) {
                    // window.location.reload();
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
                        <div className="col-md-12 pr-0 pl-0" style={{ height: '632px' }}>
                            <table class="table table-striped table-hover text-center">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Price</th>
                                        {/* <th scope="col">Order Time</th> */}
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allOrder.map(allOrder => <tr>
                                            <th>{allOrder.name}</th>
                                            <td>{allOrder.email}</td>
                                            <td>$ {allOrder.price}</td>
                                            {/* <td>{allOrder.time}</td> */}
                                            <td>
                                                <form className="" action="">
                                                    <select onClick={() => handleUpdateStatus(allOrder._id)} onChange={(e) => {
                                                        const ChengedStatus = e.target.value;
                                                        setStatus(ChengedStatus);
                                                        setId(allOrder._id);

                                                    }} className="form-control" name="cars">
                                                        <option id="StatusForChenge" className="text-danger" >{allOrder.status}</option>
                                                        <option className="text-success" value="Done">Done</option>
                                                        <option className="text-warning" value="On Going">On Going</option>
                                                    </select>
                                                </form>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                                {allOrder.length === 0 && <div>
                                    <img className="img-fluid ml-5 mt-5 pl-5" src={noOrder} alt="noOrder" />

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

export default OrderList;