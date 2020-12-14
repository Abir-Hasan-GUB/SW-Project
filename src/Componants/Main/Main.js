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
import AdminPanel from '../AdminPanel/AdminPanel';
import ViewAllProducts from '../ViewAllProducts/ViewAllProducts';
import OrderList from '../OrderList/OrderList';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import ViewAllProducts from '../ViewAllProducts/AddProduct';
// import ViewAllProducts from '../ViewAllProducts/orderList';
// import ViewAllProducts from '../ViewAllProducts/MakeAdmin';


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
                <Route path="/admin">
                    <AdminPanel></AdminPanel>
                </Route>
                <Route path="/statistics">
                    <AdminPanel></AdminPanel>
                </Route>
                <Route path="/ViewAllReviews">
                    <ViewAllProducts></ViewAllProducts>
                </Route>
                <Route path="/orderList">
                    <OrderList></OrderList>
                </Route>
                <Route path="/addProduct">
                    <AddProduct></AddProduct>
                </Route>
                <Route path="/makeAdmin">
                    <MakeAdmin></MakeAdmin>
                </Route>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </Router>
    );
};

export default Main;