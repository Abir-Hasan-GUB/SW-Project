import React from 'react';
import './Footer.css';
import logo from '../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import laptop1 from '../../images/banner1.jpg';
import laptop2 from '../../images/banner2.jpg';
import laptop3 from '../../images/banner3.jpg';

const Footer = () => {
    return (
        <div id="footer" className="container footerDiv">
            <div style={{ backgroundColor: "#060e17" }} className="row text-light pt-4">
                <div className="col-md-3">
                    <Link to="/"><h1 className="text-warning navbar-brand">Creative Agency</h1></Link>
                    <p className="pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quas quam corrupti neque atque saepe ab magni temporibus !</p>
                    <ul className="d-flex list-unstyled footerList text-center justify-content-around">
                        <a target='_blank' href="https://twitter.com/AbirHasan_2247"> <li><i class="fab fa-twitter"></i></li></a>
                        <a target='_blank' href="https://www.facebook.com/abir.green.cse/"> <li><i class="fab fa-facebook-f"></i></li></a>
                        <a target='_blank' href="mailto: abirhasan6111@gmail.com"> <li><i class="fab fa-google"></i></li></a>
                        <a target='_blank' href="https://www.linkedin.com/in/abir2247/"> <li><i class="fab fa-linkedin-in"></i></li></a>
                        <a target='_blank' href="https://github.com/Abir-Hasan-GUB/Software-Engineering-Project"> <li><i class="fas fa-code-branch"></i></li></a>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Quick Link</h5>
                    <ul className="list-unstyled quickLink">
                        <Link to="/"> <li className="mt-3">Home</li></Link>
                        <a href="mailto: abirhasan6111@gmail.com"> <li className="mt-3">Contact</li></a>
                        <Link to="/products"> <li className="mt-3">Products</li></Link>
                        {/* <Link to="/admin"> <li className="mt-2">Admin</li></Link> */}
                        {/* <Link to="/client"> <li className="mt-2">Client</li></Link> */}
                        <Link to="/"> <li className="mt-3">About Us</li></Link>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Contact Us</h5>
                    <ul className="p-0">
                        <ul className="list-unstyled d-flex p-0">
                            <li><i class="fas fa-map-marker-alt mr-3"></i></li>
                            <a target="_blank" className="text-light" href="https://www.google.com.bd/maps/@23.7985508,90.3654215,15z/data=!4m2!10m1!1e2?hl=en&authuser=0">Dhaka, Shawrapara: 359/2</a> <li></li>
                        </ul>
                        <ul className="list-unstyled d-flex mt-3 p-0">
                            <li><i class="far fa-envelope mr-3"></i></li>
                            <a className="text-light" href="mailto: abirhasan6111@gmail.com">abirhasan6111@gmail.com</a><li></li>
                        </ul>
                        <ul className="list-unstyled d-flex mt-3 p-0">
                            <li><i class="fas fa-phone-alt mr-3"></i></li>
                            <a href="tel:+88-01774062312" className="text-light">+88-01774062312</a> <li></li>
                        </ul>
                        <ul className="list-unstyled d-flex mt-3 p-0">
                            <li><i class="fas fa-fax mr-3"></i></li>
                            <li>+88-01144-558-44</li>
                        </ul>
                    </ul>
                </div>
                <div className="col-md-3 d-none d-md-block">
                    <h5>Filckr Stream</h5>
                    <div className="row">
                        <div className="col-md-4">
                            <img className="img-fluid" src={laptop1} alt="filckr img" />
                        </div>
                        <div className="col-md-4">
                            <img className="img-fluid" src={laptop2} alt="filckr img" />
                        </div>
                        <div className="col-md-4">
                            <img className="img-fluid" src={laptop3} alt="filckr img" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <img className="img-fluid" src={laptop3} alt="filckr img" />
                        </div>
                        <div className="col-md-4">
                            <img className="img-fluid" src={laptop1} alt="filckr img" />
                        </div>
                        <div className="col-md-4">
                            <img className="img-fluid" src={laptop2} alt="filckr img" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <img className="img-fluid" src={laptop1} alt="filckr img" />
                        </div>
                        <div className="col-md-4">
                            <img className="img-fluid" src={laptop2} alt="filckr img" />
                        </div>
                        <div className="col-md-4">
                            <img className="img-fluid" src={laptop3} alt="filckr img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;