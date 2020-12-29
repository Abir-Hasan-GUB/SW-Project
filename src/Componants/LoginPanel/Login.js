import React, { useContext, useState } from 'react';
import firebaseConfig from './firbase.config';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const Login = () => {
    const [newUser, setNewUser] = useState(false); // use for chenge state when need to login using emai & password
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photo: ''
    });
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig); // initialize firebase
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory(); // get app history
    const location = useLocation(); // get app location
    let { from } = location.state || { from: { pathname: "/" } }; // get app location state form private route

    const provider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    const handleSignInWithFaceBook = () => {
        firebase.auth().signInWithPopup(fbProvider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log('Facebook: ' + user);
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }



    const handleSignInWithGoogle = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signInUser);
                setLoggedInUser(signInUser); // send user information to user context
                history.replace(from); //after validate loggedInUser redirect to destination page
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    // ================== Sign out by clicked button =================
    const handleSignOutWithGoogle = () => {
        firebase.auth().signOut()
            .then(res => {
                const signOutUser = {
                    isSignIn: false,
                    name: '',
                    photo: '',
                    email: '',
                    password: '',
                    error: '',
                    success: false
                }
                setUser(signOutUser);
            })
            .catch(err => {

            })
    }

    // ================== User Create by Email =================
    const handleSubmit = (e) => {
        // console.log(user.email , user.password)
        if (newUser && user.name && user.password) {
            // ========== Create user by email and password ========
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true; // if successfully login then value is true
                    setUser(newUserInfo);
                    updateUserName(user.name);
                })
                .catch((error) => {
                    console.log(error);
                    const newUserInfo = { ...user }; //copy existing user info
                    newUserInfo.error = error.message;// save error message in state for show
                    newUserInfo.success = false;// if unsuccessfully login then value is true
                    setUser(newUserInfo);
                });
        }
        //sign in existing user
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    console.log(res.user)
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true; // if successfully login then value is true
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo); //send user info to UserContext
                    history.replace(from); //after validate loggedInUser redirect to destination page
                })
                .catch((error) => {
                    const newUserInfo = { ...user }; //copy existing user info
                    newUserInfo.error = error.message;// save error message in state for show
                    newUserInfo.success = false;// if unsuccessfully login then value is true
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    // ================= Update User Name =================
    const updateUserName = name => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
            // photoURL: "https://i.imgur.com/3fet72d.jpg"
        }).then(function () {
            console.log("User name updated successfully")
        }).catch(function (error) {
            console.log("User name updated failed")
            // An error happened.
        });
    }

    // ================= Form validation =================
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            isFieldValid = e.target.value.length >= 6;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    return (
        <div className="container" id="login">
            
            <div className="login bg-light text-center p-5">
                {!newUser && <h1 className="mb-4">Login</h1>}
                {newUser && <h1 className="mb-4">Sign Up</h1>}
                {user.success && <p className="text-success"><strong>User {newUser ? 'Create' : 'Logged In'} Successfully !</strong></p>}
                {/* ==================== Login Panel ================= */}
                {!newUser && <form onSubmit={handleSubmit}>
                    <div className="form-group mt-1 px-0 px-md-5">
                        <input onBlur={handleBlur} className="form-control email form-control-lg" placeholder="Enter Email" type="email" name="email" id="" />
                    </div>
                    <div className="form-group px-0 px-md-5">
                        <input onBlur={handleBlur} className="form-control form-control-lg" placeholder="Enter Password" type="password" name="password" id="" />
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
                                    <p className="text-dark py-2"><strong>Return to <a href="" className="text-success">login</a> </strong></p>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ==================== Forgot Password Modal End ================= */}

                    <div className="form-group px-0 px-md-5 ">
                        <input className="btn btn-success logInBtn btn-sm btn-sm-lg btn-block p-3" type="submit" value="Log In" />
                    </div>
                    <p className="text-danger py-2"><strong>Not on Creative Agency? <a href="#" onClick={() => setNewUser(!newUser)} className="text-success">Sign Up</a> </strong></p>
                </form>}

                {/* ===================== Alert Messege Start ================= */}
                {/* <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Recovery Request Success!</strong> You check your mail inbox now.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div> */}
                {/* ===================== Alert Messege End ================= */}


                {/* ===================== Register Panel ================= */}

                {newUser && <form onSubmit={handleSubmit}>
                    {/* ============ Existing User Create error message =========== */}
                    {user.error && <p className="text-danger"><strong>{user.error}</strong></p>}
                    {/* ============ Existing User Create error message End =========== */}

                    {/* ============  User Create Success message =========== */}
                    {/* {user.success && <p className="text-success"><strong>User {!newUser ? 'Create' : 'Logged In'} Successfully !</strong></p>} */}
                    {/* ============ User Create Success message End =========== */}

                    <div className="form-group mt-1 px-0 px-md-5">
                        <input onBlur={handleBlur} className="form-control form-control-lg" placeholder="Enter Your Name" type="text" name="name" id="" required />
                    </div>
                    <div className="form-group mt-1 px-0 px-md-5">
                        <input onBlur={handleBlur} className="form-control email form-control-lg" placeholder="Enter Your Email" type="email" name="email" id="" required />
                    </div>
                    <div className="form-group px-0 px-md-5">
                        <input onBlur={handleBlur} className="form-control form-control-lg" placeholder="Enter Password" type="password" name="password" id="" required />
                    </div>
                    <div className="form-group px-0 px-md-5 ">
                        <input className="btn btn-success logInBtn btn-sm btn-md-lg btn-block p-3" type="submit" value="Sign Up" />
                    </div>
                    <p className="text-danger py-2"><strong>Already a member? <a onClick={() => setNewUser(!newUser)} href="#" className="text-success">Login</a> </strong></p>
                </form>}

                {/* ======================= Social Site Login ================= */}
                <p className="text-dark py-2"><strong>OR</strong></p>
                <div className="form-group px-5 ">
                    <a className="btn btn-danger justify-content-around d-flex facebookBtn logInBtn btn-sm text-light btn-block p-2" onClick={handleSignInWithGoogle}><i class="fab fa-google"></i> continue with Google</a>
                </div>
                <div className="form-group px-5 ">
                    <a className="btn btn-primary justify-content-around d-flex facebookBtn logInBtn btn-sm text-light btn-block p-2" onClick={handleSignInWithFaceBook}><i class="fab fa-facebook"></i> continue with Facebook</a>
                </div>
                <div className="form-group px-0 px-md-5 ">
                        <Link to="/"><input className="btn btn-dark text-light logInBtn btn-sm btn-sm-lg btn-block p-3" type="submit" value="Back to Home" /></Link>
                    </div>
            </div>
        </div>
    );
};

export default Login;