import "./BookingProcess.css";
import { json, useParams } from "react-router-dom";
import getonehotel from "../../store/actions/oneHotel";
import { useSelector, useDispatch } from "react-redux";
import SearchItem from "../searchItem/SearchItem";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Navbar from "../navbar/Navbar";
import Button from "react-bootstrap/Button";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axiosConfig from "../../axiosConfig/axiosConfig";
import postReservation from "../../store/actions/reservation";
import Payment from "../payment/Payment"

const BookingProcess = () => {
  const [reservation, setReservation] = useState({
    hotelData: "",
    checkInDate: "",
    checkOutDate: "",
    totalCost: "",
    customerName: "",
    customerId: "",
    customerEmail: "",
    paymentStatus: "",
    paymentId: "",
  })
  const { reservationDataStr } = useParams();
  const reservationData = JSON.parse(decodeURIComponent(reservationDataStr));
  const id = reservationData.hotelId;
  const date = reservationData.date;
  const selectedRooms = reservationData.rooms;
  const location = useLocation();
  console.log(location);
  const [REdates, setDate] = useState(location.state.dates);
  console.log(REdates);
  const token = localStorage.getItem("token");
  if (token) {
  }

  const dispatch = useDispatch();
  const theHotel = useSelector((state) => state.getoneHotel.getonehotel);
  //const bookingData = useSelector((state) => state.reservations.reservation)
  // const bookingId = bookingData._id;
  // const bookingCost = bookingData.totalCost;

  const bookingId = localStorage.getItem('reservId');
  const bookingCost = localStorage.getItem('totalPrice')

  const bookingDetails = { bookingId: bookingId, bookingCost: bookingCost };
  const bookingDetailsStr = encodeURIComponent(JSON.stringify(bookingDetails));


  useEffect(() => {
    dispatch(getonehotel(id));

  }, []);

  const navigate = useNavigate();

  const startdate = date[0].startDate;
  const startdateObj = new Date(startdate);

  const enddate = date[0].endDate;
  const entdateObj = new Date(enddate);

  const daysDif = entdateObj.getDate() - startdateObj.getDate();

  const currentUser = localStorage.getItem("loggedUser");
  const userObject = JSON.parse(currentUser);
  // console.log(userObject._id)

  // axiosConfig.get(`/users/${userId}`)
  // .then((response) => {
  //   const user = response.data;
  //   console.log(user);
  // })
  // .catch((error) => {
  //   console.error(error);
  // });




  let useremail = "";
  let userimage = "";
  let userName = "";
  let userId = "undefined";

  if (currentUser) {
    useremail = userObject.userEmail;
    userimage = userObject.userImg;
    userName = userObject.userName;
    userId = userObject._id;
  }

  const [userData, setUserData] = useState({
    useremail: useremail,
    userName: userName,
  });
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    const dates = [];
    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const alldates = getDatesInRange(REdates[0].startDate, REdates[0].endDate);
  const totalCost = theHotel.SSRoomPrice * daysDif;

  // const currentUser = localStorage.getItem("loggedUser");
  // const userObject = JSON.parse(currentUser);

  // .then(res => {
  //   const user = res.data;
  //   console.log(user);
  // })
  // .catch(error => {
  //   console.log(error);
  // });


  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axiosConfig.put(`hotels/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      const reservation = {
        hotelData: id,
        totalCost: totalCost,
        customerName: userData.userName,
        customerEmail: userData.useremail,
        customerId: currentUser ? userObject._id : null,
        checkInDate: REdates[0].startDate,
        checkOutDate: REdates[0].endDate,
        //customerMobDile: { type: Number, required: true },
      };
      dispatch(postReservation(reservation));
      console.log(bookingDetails);
      navigate(`/payment/${bookingDetailsStr}`)
    } catch (err) { }
  };





  return (
    <>
      <Navbar></Navbar>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <h6>Your booking details</h6>
              <div className="row">
                <div className="col-6">
                  Check-In
                  <br />
                  <b>
                    {startdateObj.getDate()} / {startdateObj.getMonth() + 1} /{" "}
                    {startdateObj.getFullYear()}
                  </b>
                  <br />
                  From 2:00 PM
                  <br />
                  <br />
                </div>

                <div className="col-6">
                  {" "}
                  Check-Out
                  <br />
                  <b>
                    {entdateObj.getDate()} / {entdateObj.getMonth() + 1} /{" "}
                    {entdateObj.getFullYear()}
                  </b>
                  <br />
                  Until 2:00 PM
                </div>
                <b>Total lenght of stay:</b>
                <p> {daysDif} Nights</p>
              </div>
            </div>

            <div className="card">
              <div>
                <b>Your price summary</b>
                <b style={{ marginLeft: "80px", color: "green" }}>
                  {" "}
                  EPG.{theHotel.SSRoomPrice * daysDif}

                </b>

              </div>
              <div>
                <br />
                <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faDollarSign} />
                Includes EGP 613.74 in taxes and fees
                10 % VAT

                EGP 613.74

                <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faDollarSign} />  Excludes taxes and fees

                City tax
                This price is converted to show you the approximate cost in EGP. You'll pay in EGP.
              </div>
            </div>

          </div>
          <div className="col-8">
            <div class=" searchItem">
              {/* console.log(favMovie); */}


              <img src={theHotel.HotelImg} alt="" className="siImg" />

              <div className="siDesc">
                <h1 className="siTitle">
                  {" "}

                  {theHotel.name}

                </h1>
                <span className="siDistance">"500m from center"</span>
                <span className="siTaxiOp">"Free airport taxi"</span>
                <span className="siSubtitle">
                  Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                  Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="siCancelOp"> Free cancellation</span>
                <span className="siCancelOpSubtitle">
                  You can cancel later, so lock in this great price today!
                </span>
              </div>
              <div className="siDetails">

                <div className="siDetailsTexts">
                  <span className="siPrice">{theHotel.SSRoomPrice * daysDif}</span>
                  <span className="siTaxOp">"Includes taxes and fees"</span>

                  <br />

                </div>
              </div>
            </div>

            <div class="card">
              <h5>Good to Know</h5>
              <div>

                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#18c601", margin: "1px" }}
                />
                You’ll get 2 entire apartments all to yourself!
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#18c601", margin: "1px" }}
                />
                Congrats! You picked the at CARE Holiday
                Homes Apartments Barsha Heights.

              </div>
            </div>

            <div class=" flex-row card ">
              <div className="col-1">
                {" "}
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={userimage}
                  alt=""
                />
              </div>
              <div className="col-11">
                <b> Your are logged in as: </b>
                <br />
                {useremail}
              </div>
            </div>
            <div class="card ">
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Enter Your Name </Form.Label>

                  <Form.Control className="theformI" value={userData.userName} type="text" placeholder="Name" onChange={(e) =>
                    setUserData({ ...userData, userName: e.target.value })
                  } /> </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>

                  <Form.Control className="theformI" value={userData.useremail} type="email" placeholder="name@example.com" onChange={(e) =>
                    setUserData({ ...userData, useremail: e.target.value })
                  } /> </Form.Group>


              </Form>

            </div>

            <Button className="" style={{ marginBottom: "3%", float: "right" }} onClick={handleClick} variant="primary" id="lButton">
              Go To Payment Step

            </Button>
          </div>
          <br />
          <br />
          <br />

        </div>
      </div>
    </>
  );
};

export default BookingProcess;
