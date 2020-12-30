import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';
import userIcon from '../../images/userIcon.png';
import './HomeNavbar.css';

const HomeMenuBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div className="container px-0 fixed-top">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <img className="bg-light img-fluid logo rounded" src={logo} alt="logo" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link to="/"><a class="nav-link text-warning" href="#showcase">Home <span class="sr-only">(current)</span></a></Link>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#category">Category</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#ourworks">Sample</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#footer">Contacts</a>
            </li>
            <li class="nav-item">
              <Link to="admin"><a class="nav-link btn btn-info text-light" href="#footer">Admin Panel</a></Link>
            </li>
            {/* ================ User Control Button ================= */}
            <li class="dropdown nav-item">
              <a class="dropdown-toggle nav-link text-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="img-fluid userAvatar bg-light mr-3" src={loggedInUser.photo ? loggedInUser.photo : userIcon} alt="avatar" />
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {!loggedInUser.name && <button className="btn btn-primary btn-sm"><Link className="text-light" to="/login">LogIn</Link></button>}
                {loggedInUser.name && <div>
                  <img className="img-fluid homeDropDounMenuUserImg" src={loggedInUser.photo ? loggedInUser.photo : userIcon} alt="" />
                  <h6>{loggedInUser.name}</h6>
                  <Link to="/client"><button className="btn btn-primary btn-sm">View Profile</button></Link>
                  <div class="dropdown-divider"></div>
                  <Link to="/termsAndService"><a class="dropdown-item text-left" href="#"><i class="fas fa-lock mr-2"></i> Terms of service</a></Link>
                  <Link to="/faq"><a class="dropdown-item text-left" href="#"><i class="fas fa-question-circle mr-2"></i> FAQ</a></Link>
                  <a onClick={() => setLoggedInUser({})} class="dropdown-item text-left" href="#"><i class="fas fa-sign-out-alt mr-2"></i> Logout</a>
                </div>}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HomeMenuBar;