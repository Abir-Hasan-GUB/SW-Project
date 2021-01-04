import React, { useContext } from 'react';
import './NavBar.css';
import logo from '../../images/logos/crative-agency.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import userIcon from '../../images/userIcon.png';


const NavBar = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

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
                <input onChange={props.handleSearch} type="search" class="form-control" placeholder="Search your product . . . . ." aria-label="Search" aria-describedby="basic-addon2" />
              </div>
            </li>
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
                  <a onClick={() => setLoggedInUser({})} class="dropdown-item text-left" href="#"><i class="fas fa-sign-out-alt mr-2"></i> Logout</a>
                </div>}
                <Link to="/termsAndService"><a class="dropdown-item text-left" href="#"><i class="fas fa-lock mr-2"></i> Terms of service</a></Link>
                  <Link to="/faq"><a class="dropdown-item text-left" href="#"><i class="fas fa-question-circle mr-2"></i> FAQ</a></Link>
              </div>
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