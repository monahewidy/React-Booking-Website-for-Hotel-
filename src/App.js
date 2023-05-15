import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hotel from "./pages/hotel/Hotel";
import Home from './pages/home/Home';
import List from "./pages/list/List";
import RegisterComponent from './pages/register/Register';
import LoginComponent from './pages/login/Login';
import MyWishList from "./pages/myWishList/myWishList"
import Hotelsbycity from "./pages/hotelsbycity/hotelsbycity"
import Activities from "./pages/activities/activities";
import Tours from "./pages/tours/tours";
import Payment from './components/payment/Payment';
import BookingProcess from './components/BookingProcess/BookingProcess';
import UserProfile from './components/userProfile/UserProfile';
import { IsloggedProvider } from './contexts/isLogged';
import { useState } from 'react';

import NotFound from "./pages/notFound/NotFound.jsx";
import ProtectedRoutes from './components/Guard/Guard'
function App() {

  const [isLogged, setIsLogged] = useState(false);
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/hotels" element={<List />}></Route>
        <Route path="/register" element={<RegisterComponent />}></Route>
        <Route path="/login" element={<LoginComponent />}></Route>
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/MyWishList" element={<MyWishList />} />
        <Route path="/hotelsbycity" element={<Hotelsbycity />}></Route>
        <Route path="/activities" element={<  Activities />}></Route>
        <Route path="/Payment/:bookingDetailsStr" element={<  Payment />}></Route>
        <Route path="/BookingProcess/:reservationDataStr" element={<BookingProcess />}></Route>
        <Route path="/tours" element={<  Tours />}></Route>
        <Route path="/Payment" element={<  Payment />}></Route>
        {/* <ProtectedRoutes path="/profile" element={<  UserProfile />}></ProtectedRoutes> */}
        <Route path="/profile" element={<  ProtectedRoutes />}></Route>

<Route path="/*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>



  );
}

export default App;
