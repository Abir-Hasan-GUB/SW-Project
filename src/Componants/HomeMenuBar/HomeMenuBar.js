import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
const HomeMenuBar = () => {
    return (
        <div className="container px-0 fixed-top">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">
    <img className="bg-light img-fluid logo rounded" src={logo} alt="logo"/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#showcase">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#category">Category</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#ourworks">Sample</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#footer">Contacts</a>
      </li>
      <li class="nav-item">
        <Link to="/admin"><a class="nav-link btn btn-info text-light">Admin Login</a></Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default HomeMenuBar;