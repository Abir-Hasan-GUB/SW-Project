import React, { useEffect, useState } from 'react';
import DashBoardTop from '../AdminPanel/DashBoardTop/DashBoardTop';
import DashBoardMenu from '../DashBoardMenu/DashBoardMenu';
import Footer from '../Footer/Footer';

const OrderList = () => {
    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/clientAllOrder`,)
            .then(response => response.json())
            .then(result => setAllOrder(result))
    }, [])
    console.log(allOrder)

    return (
        <div className="container">
            <div className="row mx-0">
                <div className="col-md-3 dashBoardMenu bg-dark px-0">
                    <DashBoardMenu></DashBoardMenu>
                </div>
                <div className="col-md-9 dashBoardMainDiv px-0">
                    <DashBoardTop></DashBoardTop>
                    <div className="reviews row bg-light ml-0 mr-0">
                        <div className="col-md-12 pr-0 pl-0" style={{ height: '620px' }}>
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
                                                    <select className="form-control" name="cars" id="cars">
                                                        <option className="text-danger" value="volvo">{allOrder.status}</option>
                                                        <option className="text-success" value="saab">Done</option>
                                                        <option className="text-warning" value="opel">On Going</option>
                                                    </select>
                                                </form>
                                            </td>
                                        </tr>)
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

export default OrderList;