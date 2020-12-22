import React, { useContext } from 'react';
import './NavBar.css';
import logo from '../../images/logos/crative-agency.png';
import { Link } from 'react-router-dom';
// import './uikit.min.css';
// import './uikit.min';
// import './uikit-icons.min';

const NavBar = (props) => {
  return (
    <div class="container fixed-top" id="navbar">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light" uk-sticky="top: 200; animation: uk-animation-slide-top; bottom: #sticky-on-scroll-up">
        <a class="navbar-brand">
        <Link to="/"><img class="img-fluid logo rounded" src={logo} alt="logo" /></Link>
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
              <Link to="/login"><a class="nav-link text-warning">Sign In</a></Link>
            </li>
            <li className="nav-item cartIcon">
              <i class="fas fa-shopping-cart"></i><span class="badge badgeCart text-primary">{props.cart}</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;