import React from 'react';
import './Login.css';
const Login = () => {
    return (
        <div className="container" id="login">
            <div className="login bg-light text-center p-5">
                <h1 className="mb-4">Login</h1>

                {/* ==================== Login Panel ================= */}
                <form action="">
                    <div className="form-group mt-1 px-5">
                        <input className="form-control form-control-lg" placeholder="Enter Email" type="email" name="" id="" />
                    </div>
                    <div className="form-group px-5">
                        <input className="form-control form-control-lg" placeholder="Enter Password" type="password" name="" id="" />
                    </div>
                    <div>
                        <a href=""><p className="text-danger py-2"><span className="forgetPassword" >Forgot Password?</span></p></a>
                    </div>
                    <div className="form-group px-5 ">
                        <input className="btn btn-success logInBtn btn-lg btn-block p-3" type="submit" value="Log In" />
                    </div>
                </form>

                {/* ===================== Register Panel ================= */}

                <form action="">
                <div className="form-group mt-1 px-5">
                        <input className="form-control form-control-lg" placeholder="Enter Your Name" type="text" name="" id="" />
                    </div>
                    <div className="form-group mt-1 px-5">
                        <input className="form-control form-control-lg" placeholder="Enter Your Email" type="email" name="" id="" />
                    </div>
                    <div className="form-group px-5">
                        <input className="form-control form-control-lg" placeholder="Enter Password" type="password" name="" id="" />
                    </div>
                    <div className="form-group px-5 ">
                        <input className="btn btn-success logInBtn btn-lg btn-block p-3" type="submit" value="Sign Up" />
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