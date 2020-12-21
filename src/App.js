import { createContext } from 'react';
import Main from './Componants/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './Componants/NavBar/NavBar';
import Banner from './Componants/Banner/Banner';
import Shop from './Componants/Shop/Shop';
import Login from './Componants/LoginPanel/Login';
import AdminPanel from './Componants/AdminPanel/AdminPanel';
import ViewAllReview from './Componants/ViewAllReview/ViewAllReview';
import OrderList from './Componants/OrderList/OrderList';
import AddProduct from './Componants/AddProduct/AddProduct';
import MakeAdmin from './Componants/MakeAdmin/MakeAdmin';
import NotFound from './Componants/NotFound/NotFound';
import ClienDashBoardMenu from './Componants/ClientDashBoardMenu/ClienDashBoardMenu';
import Client from './Componants/Client/Client';

function App() {
  return (
    <Router>
            <Switch>
                <Route exact path="/">
                    {/*
                    <Banner></Banner> */}
                     <NavBar></NavBar>
                    <AdminPanel></AdminPanel>
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
                    <ViewAllReview></ViewAllReview>
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
                <Route path="/client">
                    <Client></Client>
                </Route>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
