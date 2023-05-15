import "./activity.css";
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom'; 

// import { useLocation } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux";
import changeHeart from "../../store/actions/heartToggleAction";
import React, { useEffect, useState } from "react";
import sethotel from "../../store/actions/action";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Activity = ({ hotel }) => {
  useEffect(() => {
    dispatch(sethotel());
  });
  const likesEmoji = {
    liked: <AiFillHeart />,
    unliked: <AiOutlineHeart />,
  };

  // const location = useLocation(); 
  

  // const [desnation, setDestnation] = useState(location.state.destination) 
  const addFav = useSelector((state) => state.haertToggleReducer.favMovies);addFav
  // const [date, setDate] = useState(location.state.date) 
  
  const [openDate, setOpenDate] = useState(false) 
  // const [options, setOptions] = useState(location.state.options) 
  const hotelsByCity = useSelector((state) => state.search.hotelsByCity) 
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const [hearts, setHearts] = useState();
  const [render, setRender] = useState(false);

  const addToFavourites = (id, e) => {
    if (addFav.includes(id)) {
      e.target.innerHTML = likesEmoji.unliked;
      setRender((prev) => !prev);
      console.log("yes it's found");
      const newFavArr = addFav.filter((item) => item !== id);
      localStorage.setItem("favorites", JSON.stringify(newFavArr));
      return dispatch(changeHeart(newFavArr));
    } else {
      e.target.innerHTML = likesEmoji.liked;
      setRender((prev) => !prev);
      console.log("no it's not found");
      addFav.push(id);
      localStorage.setItem("favorites", JSON.stringify(addFav));
      return;
    }
  };
  const heart = (id) => {
    if (addFav.includes(id)) {
      return true;
    } else {
      return false;
    }
  };
  const handleSearch = () => {
    navigate(`/hotels/${hotel._id}`, { state: { date, options } });
  };
  return (
    <div className="searchItem">
      {/* console.log(favMovie); */}
      <div> </div>
      <Link
        to={`/hotels/${hotel._id}`}
        className="text-dark"
        style={{ textDecoration: "none" }}
      >
        <img src={hotel.HotelImg} alt="" className="siImg" />
      </Link>
      <div className="siDesc">
        {/* <h1 className="siTitle">{hotel.name}</h1> */}
        <h1 className="siTitle">
          {" "}
          <Link
            to={`/hotels/${hotel._id}`}
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            {hotel.name}
          </Link>
        </h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>

          {/* <Link
            to={`/hotels/${hotel._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link> */}
          <button onClick={handleSearch} className="siCheckButton">See availability</button>
          <br />
          <div>
        
                    {favorites.includes(hotel._id) ? (
                      <AiFillHeart onClick={(e) => addToFavourites(hotel._id, e)} style={{ color: "red" }} />
                    ) : (
                      <AiOutlineHeart onClick={(e) => addToFavourites(hotel._id, e)} />
                    )}
             

          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
