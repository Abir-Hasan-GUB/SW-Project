import React from 'react';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import Shop from '../Shop/Shop';
import NotFound from '../NotFound/NotFound'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from '../LoginPanel/Login';


const Main = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <NavBar></NavBar>
                    <Banner></Banner>
                    <Shop></Shop>
                   {/* <NotFound></NotFound> */}
                </Route>
                <Route path="/products">
                    <Shop></Shop>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </Router>
    );
};

export default Main;