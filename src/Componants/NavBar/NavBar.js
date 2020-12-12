import React from 'react';
import './NavBar.css';
import logo from '../../images/logos/crative-agency.png';
const NavBar = () => {
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light sticky-top">
        <a class="navbar-brand" href="#">
          <img class="img-fluid logo rounded" src={logo} alt="logo" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <div class="input-group searchBox">
                <input type="search" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                <div class="input-group-append ">
                  <span class="input-group-text bg-warning search" id="basic-addon2"><i class="fas fa-search"></i></span>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link text-warning" href="#">Sign In</a>
            </li>
            <li className="nav-item cartIcon">
              <i class="fas fa-shopping-cart"></i><span class="badge badgeCart text-primary">0</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;