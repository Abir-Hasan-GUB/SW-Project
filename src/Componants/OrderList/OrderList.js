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
                <div className="reviews">
                    <h1>Order List</h1>
                </div>
            </div>
        </div>
    </div>
    );
};

export default OrderList;