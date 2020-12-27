import { createContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
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
import ReviewOrder from './Componants/ReviewOrder/ReviewOrder';
import PlaceOrder from './Componants/PlaceOrder/PlaceOrder';
import PrivateRoute from './Componants/PrivateRoute/PrivateRoute';
import TermsAndService from './Componants/TermsAndService/TermsAndService';
import FAQ from './Componants/FAQ/FAQ';
import Shipment from './Componants/Shipment/Shipment';

export const UserContext = createContext();

function App() {
const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
                    {/* <Login></Login> */}
                </Route>
                <Route path="/products">
                    <Shop></Shop>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <PrivateRoute path="/admin">
                    <AdminPanel></AdminPanel>
                </PrivateRoute>
                <PrivateRoute path="/statistics">
                    <AdminPanel></AdminPanel>
                </PrivateRoute>
                <PrivateRoute path="/ViewAllReviews">
                    <ViewAllReview></ViewAllReview>
                </PrivateRoute>
                <PrivateRoute path="/orderList">
                    <OrderList></OrderList>
                </PrivateRoute>
                <PrivateRoute path="/addProduct">
                    <AddProduct></AddProduct>
                </PrivateRoute>
                <PrivateRoute path="/makeAdmin">
                    <MakeAdmin></MakeAdmin>
                </PrivateRoute>
                {/* <Route path="/client">
                    <Client></Client>
                    <Footer></Footer>
                </Route> */}
                <PrivateRoute path="/feedBack">
                    <FeedBack></FeedBack>
                </PrivateRoute>
                <PrivateRoute path="/message">
                    <Message></Message>
                </PrivateRoute>
                <PrivateRoute path="/client">
                    <ClientOrder></ClientOrder>
                </PrivateRoute>
                <Route path="/product/:productKey">
                    <ProductDetails></ProductDetails>
                </Route>
                <PrivateRoute path="/reviewOrder">
                    <ReviewOrder></ReviewOrder>
                </PrivateRoute>
                <PrivateRoute path="/placeOrder">
                    <PlaceOrder></PlaceOrder>
                </PrivateRoute>
                <PrivateRoute path="/termsAndService">
                    <TermsAndService></TermsAndService>
                </PrivateRoute>
                <PrivateRoute path="/faq">
                    <FAQ></FAQ>
                </PrivateRoute>
                <PrivateRoute path="/orderComplete">
                    <Shipment></Shipment>
                </PrivateRoute>
                
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </Router>
        </UserContext.Provider>
    );
}

export default App;
