import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
const ShopNavBar = () => {
    return (
        <div className="container fixed-top">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand">
   <Link to="/"> <img className="bg-light img-fluid logo rounded" src={logo} alt="logo"/></Link>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <Link to="/"><a class="nav-link">Home <span></span></a></Link>
      </li>
      <li class="nav-item">
        <Link to="/products"><a class="nav-link">Shope</a></Link>
      </li>
      <li class="nav-item">
        <Link to="/reviewOrder"><a class="nav-link active">Review Order</a></Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Manage Inventory</a>
      </li>
      {/* <li class="nav-item">
        <Link to="/admin"><a class="nav-link btn btn-info text-light">Admin Login</a></Link>
      </li> */}
    </ul>
  </div>
</nav>
        </div>
    );
};

export default ShopNavBar;