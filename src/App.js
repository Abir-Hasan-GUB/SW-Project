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
import NotFound from './Componants/NotFound/NotFound'
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
import DailySell from './Componants/DailySell/DailySell';
import UpdateProducts from './Componants/UpdateProducts/UpdateProducts';

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
                        <Footer></Footer>
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

                    <PrivateRoute path="/message">
                        <Message></Message>
                    </PrivateRoute>
                    <PrivateRoute path="/client">
                        <ClientOrder></ClientOrder>
                    </PrivateRoute>
                    <Route path="/product/:productKey">
                        <ProductDetails></ProductDetails>
                    </Route>
                    <Route path="/reviewOrder">
                        <ReviewOrder></ReviewOrder>
                    </Route>
                    <PrivateRoute path="/placeOrder">
                        <PlaceOrder></PlaceOrder>
                    </PrivateRoute>
                    <Route path="/termsAndService">
                        <TermsAndService></TermsAndService>
                    </Route>
                    <Route path="/faq">
                        <FAQ></FAQ>
                    </Route>
                    <Route path="/orderComplete">
                        <Shipment></Shipment>
                    </Route>
                    <Route path="/dailySell">
                        <DailySell></DailySell>
                    </Route>
                    <Route path="/updateProduct">
                        <UpdateProducts></UpdateProducts>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
