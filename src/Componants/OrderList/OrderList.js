import React from 'react';
import DashBoardTop from '../AdminPanel/DashBoardTop/DashBoardTop';
import DashBoardMenu from '../DashBoardMenu/DashBoardMenu';

const OrderList = () => {
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
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Product Details</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Abir Hasan</td>
                                        <td>Samsung A50</td>
                                        <td>@mdo</td>
                                        <td>
                                        <form className="" action="">
                                                <select className="form-control" name="cars" id="cars">
                                                    <option className="text-danger"value="volvo">pending</option>
                                                    <option className="text-success" value="saab">Done</option>
                                                    <option className="text-warning" value="opel">On Going</option>
                                                </select>
                                                </form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>
                                        <form className="" action="">
                                                <select className="form-control" name="cars" id="cars">
                                                    <option className="text-danger"value="volvo">pending</option>
                                                    <option className="text-success" value="saab">Done</option>
                                                    <option className="text-warning" value="opel">On Going</option>
                                                </select>
                                                </form>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>the Bird</td>
                                        <td>
                                        <form className="" action="">
                                                <select className="form-control" name="cars" id="cars">
                                                    <option className="text-danger"value="volvo">pending</option>
                                                    <option className="text-success" value="saab">Done</option>
                                                    <option className="text-warning" value="opel">On Going</option>
                                                </select>
                                                </form>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;