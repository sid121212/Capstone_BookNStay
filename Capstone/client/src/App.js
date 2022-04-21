import React, {useContext, useEffect} from "react";
import "./styles/App.scss";
import {Route, Switch, useLocation} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import NavMobile from "./components/navbar/NavMoblile";

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-free/css/all.min.css';

// import Home from "./components/pages/Home";
import Homi from "./components/pages/Home";
import Rooms from "./components/pages/rooms/Rooms";
import Room from "./components/pages/rooms/Room";
import Dining from "./components/pages/Dining";
import Footer from "./components/pages/Footer";
import About from "./components/pages/About";
import Tour from "./components/pages/Tour";
import Booking from "./components/booking/Booking";
import Available from "./components/booking/Available";
import Checkout from "./components/booking/Checkout";
import Confirm from "./components/booking/Confirm";
import Auth from "./components/auth/Auth";
import Existing from "./components/booking/Existing";
import NoPage from "./components/pages/NoPage";
import MainHomepage from "./components/pages/MainHomepage/MainHomepage";
import Checkbox from "./components/checkbox";

import LandingPage from "./components/pages/auth/LandingPage";
import LoginPage from "./components/pages/auth/LoginPage";
import LoginPageAdmin from "./components/pages/auth/LoginPageAdmin";
import ForgetPasswordPage from "./components/pages/auth/ForgetPasswordPage";
import RegisterPage from "./components/pages/auth/RegisterPage";
import RegisterPageAdmin from "./components/pages/auth/RegisterPageAdmin";
import HotelDetails from "./components/Admin/HotelDetails/HotelDetails";
import {Context} from "./context/Context";
import NewHotelDetails from "./components/Admin/HotelDetails/NewHotelDetails";
import HotelPage from "./components/pages/HotelPage/HotelPage"
import Home from "./components/pages/Home";
import NewRoomDetails from "./components/Admin/RoomDetails/NewRoomDetails";
import City from "../src/components/booking/city"
import Payment from "./components/Payments/payment.js";
import ConfirmBookings from "./components/pages/rooms/ConfirmBookings";




const App = () => {
  const {user} = useContext(Context);
  const location = useLocation();
  /* const history = useHistory(); */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      {/* <Navbar /> */}
      {/* <NavMobile /> */}
      <Switch>
        {/* 0 */}

        <Route path="/homi" exact component={Homi} />

        {/* 0 */}

        <Route path="/rooms" exact component={Rooms} />
        <Route
          path="/rooms/:id"
          exact
          render={(props) => <Room {...props} />}
        />
        <Route path="/dining" exact component={Dining} />
        {/* 0 */}
        <Route path="/about" exact component={About} />
        {/* 0 */}
        <Route path="/tours" exact component={Tour} />
        {/* 0 */}
        {/* <Route path="/booking" exact component={Booking} /> */}
        {/* 1 */}
        <Route path="/booking/availability" exact component={Available} />
        <Route path="/booking/checkout" exact component={Checkout} />
        <Route path="/booking/confirm" exact component={Confirm} />
        <Route path="/booking/existing" exact component={Existing} />
        <Route path="/city" exact component={City}></Route>
        {/* <Route path="/admin" exact component={Auth} /> */}
        {/* <Route path="*" exact component={NoPage} /> */}
        
        
        {
          user ? <Route exact path="/">{user.result.isAdmin==true ? <NewHotelDetails></NewHotelDetails>:<MainHomepage></MainHomepage> }</Route> 
          :
          <Route exact path="/"><LandingPage></LandingPage></Route> 
        }
        
        
        <Route path="/Customer">{user ? <MainHomepage></MainHomepage>:<LoginPage></LoginPage>}</Route>
        <Route path="/register">{user ? <MainHomepage></MainHomepage>:<RegisterPage></RegisterPage>}</Route>
        
        <Route path="/Admin">{user ? <MainHomepage></MainHomepage>:<LoginPageAdmin></LoginPageAdmin>}</Route>
        <Route path="/AdminRegister">{user ? <MainHomepage></MainHomepage>:<RegisterPageAdmin></RegisterPageAdmin>}</Route>

        <Route exact path="/">
          {user ? <MainHomepage></MainHomepage> : <LandingPage></LandingPage>}
        </Route>

        <Route path="/Customer">
          {user ? <MainHomepage></MainHomepage> : <LoginPage></LoginPage>}
        </Route>
        <Route path="/register">
          {user ? <MainHomepage></MainHomepage> : <RegisterPage></RegisterPage>}
        </Route>

        <Route path="/home"><MainHomepage></MainHomepage></Route>
        <Route path="/addHotel" component={NewHotelDetails}/>
        <Route path="/addRoom" component={NewRoomDetails}></Route>
        <Route path="/hotel/:id" component={HotelPage}/>
        <Route path="/hotelpage" component={Home}></Route>
        {/* <Route path="/checkout" component={checkout}></Route> */}
        <Route path="/payments" component={Payment}></Route>

        <Route path="/home">
          <MainHomepage></MainHomepage>
        </Route>
        <Route path="/addHotel" component={NewHotelDetails} />
        <Route path="/booking" component={ConfirmBookings} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
