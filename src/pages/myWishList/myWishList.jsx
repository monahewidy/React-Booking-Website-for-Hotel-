import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import changeHeart from "../../store/actions/heartToggleAction";
import { useEffect, useState } from "react";
import sethotel from "../../store/actions/action";
import SearchItem from "../../components/searchItem/SearchItem";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"

const MyWishList = () => {
  useEffect(() => {
    dispatch(sethotel());
  });
 
  const [render, setRender] = useState(false);

  const hotels = useSelector((state) => state.hotels.gethotels);

  const addFav = useSelector((state) => state.haertToggleReducer.favMovies);
  

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const favoriteHotels = hotels.filter((hotels) => favorites.includes(hotels._id));

  const [movie, setMovie] = useState([]);
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

  const dispatch = useDispatch();
  const likesEmoji = {
    liked: <AiFillHeart />,
    unliked: <AiOutlineHeart />,
  };

  useEffect(() => {
    dispatch(sethotel());
  });

  return (
    <div>
     <Navbar />
            <Header type="list" />
   
       <div className="listContainer">
                <div className="listWrapper">
                  {/* <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input type="text" />
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                                date[0].endDate,
                                "MM/dd/yyyy"
                            )}`}</span>
                            {openDate &&
                                (<DateRange
                                    onChange={item => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                />
                                )}
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Min price <small>per nigth</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Max price <small>per nigth</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Adult
                                    </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Children
                                    </span>
                                    <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Room
                                    </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div> */}
                    
                    <div className="listResult">
                     {favoriteHotels.map((hotel) => (
     
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
                <button  className="siCheckButton">See availability</button>
           
              
             
                    {favorites.includes(hotel._id) ? (
                      <AiFillHeart onClick={(e) => addToFavourites(hotel._id, e)} style={{ color: "red" }} />
                    ) : (
                      <AiOutlineHeart onClick={(e) => addToFavourites(hotel._id, e)} />
                    )}
                
             </div>
      
                
              </div>
            </div>
            
        
      ))}</div>
    </div>
    </div>
    </div>
    
    
  );
};

export default MyWishList;
