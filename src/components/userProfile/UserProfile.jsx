import "./userProfile.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getReservationByUser } from "../../store/actions/reservation";
import { json, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axiosConfig from "../../axiosConfig/axiosConfig";
import Form from "react-bootstrap/Form";
import Navbar from "../navbar/Navbar";


const UserProfile = () => {
    const data = useSelector((state) => state.reservations.allUserData);
    const dispatch = useDispatch();
    const currentUser = localStorage.getItem("loggedUser");
    const userObject = JSON.parse(currentUser);
    console.log(userObject);
    const userEmail = userObject.userEmail;
    console.log(userEmail);
    const userName = userObject.userName;
    const id = userObject._id;
    const userPhone = userObject.userPhone;
    const userImg = userObject.userImg;
    // useremail= userObject.userEmail;
    // userName=userObject.userName;



    useEffect(() => {
        dispatch(getReservationByUser(id))
        console.log(data);


    })

    console.log(data);
    const [userData, setUserData] = useState({
        userEmail: userEmail,
        userName: userName,
        userPhone: userPhone,

    });
    const handleClick = async () => {
        try {
            await Promise.all(

                axiosConfig.patch(`users/${id}`, userData)


            );



            navigate(`/profile`)
        } catch (err) { }
    };


    return (
        <>
            <Navbar></Navbar>
            <div class="container">
                <div class="card ">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <div>
                                <img
                                    style={{ width: "50px", height: "50px" }}
                                    src={userImg}
                                    alt=""
                                    class="rounded-circle"
                                /> <b style={{ color: "blue" }}>Edit your Profile data</b>
                            </div>
                            <Form.Label>Your Name </Form.Label>

                            <Form.Control className="theformI" value={userData.userName} type="text" placeholder="Name" onChange={(e) =>
                                setUserData({ ...userData, userName: e.target.value })
                            } /> </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>

                            <Form.Control className="theformI" value={userData.userEmail} type="email" placeholder="name@example.com" onChange={(e) =>
                                setUserData({ ...userData, userEmail: e.target.value })
                            } /> </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>

                            <Form.Control className="theformI" value={userData.userPhone} type="email" placeholder="name@example.com" onChange={(e) =>
                                setUserData({ ...userData, userPhone: e.target.value })
                            } /> </Form.Group>

                    </Form>

                    <button class="btn bg-info" onClick={handleClick}>Edit </button>
                </div>
                {data.map((data) => (

                    <div class="card ">
                        <h6 style={{ color: "blue" }}>Your booking details</h6>
                        <div className="card">

                            <div className="row">
                                <div className="col-2">
                                    <img style={{ width: "100px", height: "100px" }} src={data.hotelData.HotelImg} alt="" className="siImg" />
                                </div>
                                <div className="col-6">
                                    Check-In Date
                                    <br />
                                    <b>
                                        {data.checkInDate}
                                    </b>
                                    <br />
                                    From 2:00 PM
                                    <br />
                                    <br />
                                </div>

                                <div className="col-4 row">
                                    {" "}
                                    Check-Out Date
                                    <br />
                                    <b>
                                        {data.checkOutDate}
                                    </b>
                                    <br />
                                    Until 2:00 PM
                                </div>
                                <div style={{ width: "200px" }}>
                                    <b> Payment Status:</b>
                                    <p style={{ marginLeft: "5px", background: "yellow" }}>  {data.paymentStatus}</p>
                                </div>
                                <p> </p>
                            </div>
                        </div>




                    </div>
                ))}
            </div>

        </>
    )
}



export default UserProfile;