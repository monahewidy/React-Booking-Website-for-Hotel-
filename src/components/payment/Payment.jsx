
import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axiosConfig from "../../axiosConfig/axiosConfig";
import { useParams } from 'react-router-dom';

import "./payment.css";

import Header from "../../components/header/Header";
import Navbar from "./../../components/navbar/Navbar";

import MailList from "./../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";



const Payment = () => {

  const { bookingDetailsStr } = useParams();
  const bookingData = JSON.parse(decodeURIComponent(bookingDetailsStr));
  console.log(bookingDetailsStr)
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleToken = async (token) => {
    try {
      const bookingId = bookingData.bookingId;
      const response = await axiosConfig.post('/payment', {
        bookingId,
        token,
      });
      setPaymentSuccess(response.data.booking);
    } catch (error) {
      setPaymentError(error.response.data.message);
    }
  };

  return (
    <div>

      <Navbar></Navbar>
      <Header type="list" />

      <div className="mt-5 d-flex flex-column align-items-center gap-5">
      <div className="centered-div">
      <StripeCheckout
        token={handleToken}
        stripeKey="pk_test_51N1oJNAB87pT1j76v4i0wDIhdsHyVzCkxlSwF4CcqbFA9MkLuIhHn76EU0GkDcnRPy1SlqmcaC9ztybp0zNste0700MKFBzuRL"
        amount={parseInt(bookingData.bookingCost) * 100}
      />
      </div>

      <div >
      {paymentError && <p className="centered-div card-error">Error: {paymentError}</p>}
      </div>

      <div >
      {paymentSuccess && (
        <p className="centered-div card-id">
          Payment successful! Your booking ID is {paymentSuccess._id}.
        </p>
      
      )}
      </div>


        <MailList />
        <Footer />
        </div>
    </div>
  );
};

export default Payment;