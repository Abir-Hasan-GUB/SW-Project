import React from 'react';
import './Login.css';
const Login = () => {
    return (
        <div className="container" id="login">
            <div className="login bg-light text-center p-5">
                <h1 className="mb-4">Login</h1>
                <h1 className="mb-4">Sign Up</h1>

                {/* ==================== Login Panel ================= */}
                <form action="">
                    <div className="form-group mt-1 px-0 px-md-5">
                        <input className="form-control email form-control-lg" placeholder="Enter Email" type="email" name="" id="" />
                    </div>
                    <div className="form-group px-0 px-md-5">
                        <input className="form-control form-control-lg" placeholder="Enter Password" type="password" name="" id="" />
                    </div>
                    <div>
                        <a data-toggle="modal" data-target="#forgotPasswordModal" href=""><p className="text-danger py-2"><span className="forgetPassword" >Forgot Password?</span></p></a>
                    </div>

                    {/* ==================== Forgot Password Modal ================= */}

                    <div class="modal fade" id="forgotPasswordModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title h3 text-danger" id="exampleModalCenterTitle">Reset Password</h1>

                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p class="lead">Enter the email address associated with your account.</p>
                                    <div className="form-group">
                                        <input className="ForgotEmail form-control form-control-lg email" type="email" name="" placeholder="Enter Your Email" id="" />
                                    </div>
                                    <div className="form-group px-0 px-md-5 ">
                                        <input className="btn btn-success logInBtn btn-md btn-block p-3" type="submit" value="Reset Password" />
                                    </div>
                                    <p className="text-dark py-2"><strong>Return to <a href="#" className="text-success">Login</a> </strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ==================== Forgot Password Modal End ================= */}

                    <div className="form-group px-0 px-md-5 ">
                        <input className="btn btn-success logInBtn btn-sm btn-sm-lg btn-block p-3" type="submit" value="Log In" />
                    </div>
                </form>

                {/* ===================== Alert Messege Start ================= */}
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Recovery Request Success!</strong> You check your mail inbox now.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                {/* ===================== Alert Messege Start ================= */}


                {/* ===================== Register Panel ================= */}

                <form action="">
                    <div className="form-group mt-1 px-0 px-md-5">
                        <input className="form-control form-control-lg" placeholder="Enter Your Name" type="text" name="" id="" />
                    </div>
                    <div className="form-group mt-1 px-0 px-md-5">
                        <input className="form-control email form-control-lg" placeholder="Enter Your Email" type="email" name="" id="" />
                    </div>
                    <div className="form-group px-0 px-md-5">
                        <input className="form-control form-control-lg" placeholder="Enter Password" type="password" name="" id="" />
                    </div>
                    <div className="form-group px-0 px-md-5 ">
                        <input className="btn btn-success logInBtn btn-sm btn-md-lg btn-block p-3" type="submit" value="Sign Up" />
                    </div>
                </form>

                <p className="text-danger py-2"><strong>Already a member? <a href="#" className="text-success">Login</a> </strong></p>

                {/* ======================= Social Site Login ================= */}
                <p className="text-dark py-2"><strong>OR</strong></p>
                <div className="form-group px-5 ">
                    <a className="btn btn-danger justify-content-around d-flex facebookBtn logInBtn btn-sm text-light btn-block p-2"><i class="fab fa-google"></i> continue with Google</a>
                </div>
                <div className="form-group px-5 ">
                    <a className="btn btn-primary justify-content-around d-flex facebookBtn logInBtn btn-sm text-light btn-block p-2"><i class="fab fa-facebook"></i> continue with Facebook</a>
                </div>
                <p className="text-danger py-2"><strong>Not on Creative Agency? <a href="#" className="text-success">Sign Up</a> </strong></p>
            </div>
        </div>
    );
};

export default Login;