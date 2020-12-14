import React from 'react';
import AdminPanel from '../AdminPanel/AdminPanel';

const MakeAdmin = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 dashBoardMenu bg-dark px-0">
                    <AdminPanel></AdminPanel>
                </div>
                <div className="col-md-9 dashBoardMainDiv px-0">
                    <div className="dashBoardBar bg-primary"></div>
                    <h1>Make Admin</h1>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;