import React from 'react';
import DashBoardTop from '../AdminPanel/DashBoardTop/DashBoardTop';
import ClienDashBoardMenu from '../ClientDashBoardMenu/ClienDashBoardMenu';

const Client = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 dashBoardMenu bg-dark px-0">
                    <ClienDashBoardMenu></ClienDashBoardMenu>
                </div>
                <div className="col-md-9 dashBoardMainDiv px-0">
                    <DashBoardTop></DashBoardTop>
                </div>
            </div>

        </div>
    );
};

export default Client;