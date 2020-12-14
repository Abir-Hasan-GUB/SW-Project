import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div id="NotFnd">
            <Link to="/"><a className="bckHomPageBtn text-light btn btn-danger btn-lg">Go to Home Page</a></Link>
            <div className="smlNotFnd d-block d-sm-none p-3 bg-dark text-light text-center w-75 rounded">
                <h1 className="text-light">Page Not Found !!!</h1>
                <Link to="/"><a className=" mt-3 text-light btn btn-danger btn-lg">Go to Home Page</a></Link>
            </div>
        </div>
    );
};

export default NotFound;