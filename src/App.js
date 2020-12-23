import { createContext } from 'react';
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
import FeedBack from './Componants/FeedBack/FeedBack';
import Message from './Componants/Message/Message';
import ClientOrder from './Componants/ClientOrder/ClientOrder';
import Footer from './Componants/Footer/Footer';
import Sliders from './Componants/Sliders/Sliders';
import HomeCategories from './Componants/HomeCategories/HomeCategories';
import HomeMenuBar from './Componants/HomeMenuBar/HomeMenuBar';
import ProductDetails from './Componants/ProductDetails/ProductDetails';

function App() {
  return (
    <Router>
            <Switch>
                <Route exact path="/">
                    <HomeMenuBar></HomeMenuBar>
                    <Banner></Banner>
                    <HomeCategories></HomeCategories>
                    <Sliders></Sliders>
                    {/* <AdminPanel></AdminPanel> */}
                    <Footer></Footer>
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
                {/* <Route path="/client">
                    <Client></Client>
                    <Footer></Footer>
                </Route> */}
                <Route path="/feedBack">
                    <FeedBack></FeedBack>
                </Route>
                <Route path="/message">
                    <Message></Message>
                </Route>
                <Route path="/client">
                    <ClientOrder></ClientOrder>
                </Route>
                <Route path="/product/:productKey">
                    <ProductDetails></ProductDetails>
                </Route>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
