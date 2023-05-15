import React, { useEffect, useState } from "react";
import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import { format } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import searchByCity from "../../store/actions/searchAction";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import changeHeart from "../../store/actions/heartToggleAction";
import sethotel from "../../store/actions/action";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const List = ({ hotel }) => {
  const { t } = useTranslation();

  const likesEmoji = {
    liked: <AiFillHeart />,
    unliked: <AiOutlineHeart />,
  };

  const location = useLocation();
  const [desnation, setDestnation] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const hotelsByCity = useSelector((state) => state.search.hotelsByCity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [Min, setMin] = useState(0);
  const [Max, setMax] = useState(90000000000000000000000);

  //
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());

    // console.log(getTime(date1));
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const addFav = useSelector((state) => state.haertToggleReducer.favMovies);

  const days = dayDifference(date[0].endDate, date[0].startDate);

  //
  const [hearts, setHearts] = useState();
  const [render, setRender] = useState();
  useEffect(() => {
    dispatch(searchByCity(desnation));
    dispatch(sethotel());
  });
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
  const filteredHotels = hotelsByCity.filter((hotel) => {
    const totalPrice = hotel.SSRoomPrice * days;
    return totalPrice >= Min && totalPrice <= Max;
  });

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">{t("Search")}</h1>
            <div className="">
              <label>{t("Destination")}</label>
              <input placeholder={desnation} type="text" />
            </div>
            <div className="">
              <label>{t("Check-in Date")}</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="">
              <label>{t("Options")}</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    {t("Min price per night")}
                  </span>
                </div>
                <input
                  type="number"
                  placeholder="0"
                  onChange={(e) => setMin(e.target.value)}
                  className=""
                  style={{
                    outline: "none",
                    borderRadius: "6px",
                    border: "none",
                  }}
                />

                <div>
                  {t("your min. price")} : {Min}
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    {t("Max price per night")}
                  </span>
                </div>
                <input
                  type="number"
                  placeholder="0"
                  onChange={(e) => setMax(e.target.value)}
                  className=""
                  style={{
                    outline: "none",
                    borderRadius: "6px",
                    border: "none",
                  }}
                />

                <div className="lsOptionItem">
                  <span className="lsOptionText">{t("Adult")}</span>
                </div>
                <input
                  style={{
                    outline: "none",
                    borderRadius: "6px",
                    border: "none",
                  }}
                  type="number"
                  min={1}
                  className=""
                  placeholder={options.adult}
                />
                <div className="lsOptionItem">
                  <span className="">{t("Children")}</span>
                </div>
                <input
                  style={{
                    outline: "none",
                    borderRadius: "6px",
                    border: "none",
                  }}
                  type="number"
                  min={0}
                  className=""
                  placeholder={options.children}
                />
                <div className="lsOptionItem">
                  <span className="lsOptionText">{t("Room")}</span>
                </div>
                <input
                  style={{
                    outline: "none",
                    borderRadius: "6px",
                    border: "none",
                  }}
                  type="number"
                  min={1}
                  className=""
                  placeholder={options.room}
                />
              </div>
            </div>

            <br />

            <button
              style={{
                backgroundColor: "#003580",
                borderRadius: "6px",
                border: "none",
              }}
            >
              {t("Search")}
            </button>
          </div>
          <div className="listResult">
            {filteredHotels.map((hotel) => (
              <SearchItem hotel={hotel} key={hotel._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
