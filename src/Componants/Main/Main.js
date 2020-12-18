import React from 'react';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import Shop from '../Shop/Shop';
import NotFound from '../NotFound/NotFound'; 
import Login from '../LoginPanel/Login';
import AdminPanel from '../AdminPanel/AdminPanel';
import ViewAllProducts from '../ViewAllProducts/ViewAllProducts';
import OrderList from '../OrderList/OrderList';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ViewAllReview from '../ViewAllReview/ViewAllReview';


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Shop></Shop>
            <Login></Login>
            <AdminPanel></AdminPanel>
            <AdminPanel></AdminPanel>
            <ViewAllReview></ViewAllReview>
            <OrderList></OrderList>
            <AddProduct></AddProduct>
            <MakeAdmin></MakeAdmin>
            <NotFound></NotFound>
        </div>
    );
};

export default Main;