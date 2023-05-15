import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/header/Header";
import "./reserve.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import axiosConfig from "../../axiosConfig/axiosConfig";
// import useFetch from "../../hooks/useFetch";
// import { useContext, useState } from "react";
// import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { Link } from "react-router-dom";
//import { createBrowserHistory } from 'history';
import { useParams } from "react-router-dom";
import SearchItem from "../../components/searchItem/SearchItem";
import { useLocation } from "react-router-dom";
import searchByCity from "../../store/actions/searchAction";

const Reserve = ({ setOpen, hotelId }) => {
  const hotelllll = useSelector((state) => state.hotels.gethotels);
  const [hotels, sethotels] = useState([]);

  const { id } = useParams();
  const location = useLocation();
  const hotelll = hotelllll.find((hotel) => hotel._id == `${id}`);
  //console.log(hotelll);

  //console.log(location);
  const [selectedRooms, setSelectedRooms] = useState([]);
  //   const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const data1 = useSelector((state) => state.hotels.gethotels);
  const data = data1.find((hotel) => hotel._id == `${id}`);
  const recievedDates = location.state.date
  const [dates, setDate] = useState(location.state.date);
  //console.log(dates);
  const dispatch = useDispatch();

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    const dates = [];
    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    console.log(dates);
    return dates;

  };
  console.log(location.state.date);
  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  


  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)

    );
    console.log(selectedRooms)
  };
  console.log(selectedRooms);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {

      setOpen(false);
      const reservationData = { hotelId: id, rooms: selectedRooms, date: recievedDates };
      console.log(reservationData);
      const reservationDataStr = encodeURIComponent(JSON.stringify(reservationData));
      navigate(`/BookingProcess/${reservationDataStr}`, { state: { dates } })
    } catch (err) { }
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {hotelll.hotelrooms.map((rooms) => (
          <div className="rItem" key={rooms._id}>
            <div className="rItemInfo">
              <div className="rTitle">{rooms.Name}</div>
              <div className="rDesc">{rooms.RoomCount}</div>
              <div className="rMax">
                Max people: <b>{rooms.roomtype.bedType}</b>
              </div>
              <div className="rPrice">{rooms.roomtype.toiletsNumber}</div>
            </div>
            <div className="rSelectRooms">
              {rooms.roomNumbers.map((roomNumber) => (
                <div className="room">
                  {/* Dont Forget to change num. to price */}
                  <label

                    hidden={!isAvailable(roomNumber)}
                  >{roomNumber.Price} LE.</label>

                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    hidden={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>

      </div>
    </div>
  );
};

export default Reserve;
