import React, { useEffect, useState } from 'react';
import './hotelsbycity.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation } from 'react-router-dom';
import SearchItem from '../../components/searchItem/SearchItem';
import { useSelector, useDispatch } from 'react-redux';
import searchByCity from '../../store/actions/searchAction';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

import { useNavigate } from 'react-router-dom';

import changeHeart from '../../store/actions/heartToggleAction';
import sethotel from '../../store/actions/action';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
const Hotelsbycity = () => {
  const location = useLocation();
  const [date, setDate] = useState(location.state.date);
 
  const [desnation, setDestnation] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  const hotelsByCity = useSelector((state) => state.search.hotelsByCity);
  const dispatch = useDispatch();

  const likesEmoji = {
    liked: <AiFillHeart />,
    unliked: <AiOutlineHeart />,
  };

  const navigate = useNavigate();
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [Min, setMin] = useState(0);
  const [Max, setMax] = useState(90000000000000000000000);

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
      localStorage.setItem('favorites', JSON.stringify(newFavArr));
      return dispatch(changeHeart(newFavArr));
    } else {
      e.target.innerHTML = likesEmoji.liked;
      setRender((prev) => !prev);
      console.log("no it's not found");
      addFav.push(id);
      localStorage.setItem('favorites', JSON.stringify(addFav));
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
  useEffect(() => {
    dispatch(searchByCity(desnation));
  }, [desnation]);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="">
              <label>Destination</label>
              <input placeholder={desnation} type="text" />
            </div>
            <div className="">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                'MM/dd/yyyy'
              )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                </div>
                <input
                  type="number"
                  placeholder="0"
                  onChange={(e) => setMin(e.target.value)}
                  className=""
                  style={{
                    outline: 'none',
                    borderRadius: '6px',
                    border:
'none',
                  }}
                />

                <div>your min. price : {Min}</div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                </div>
                <input
                  type="number"
                  placeholder="0"
                  onChange={(e) => setMax(e.target.value)}
                  className=""
                  style={{
                    outline: 'none',
                    borderRadius: '6px',
                    border: 'none',
                  }}
                />

                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                </div>
                <input
                  style={{
                    outline: 'none',
                    borderRadius: '6px',
                    border: 'none',
                  }}
                  type="number"
                  min={1}
                  className=""
                />
                <div className="lsOptionItem">
                  <span className="">Children</span>
                </div>
                <input
                  style={{
                    outline: 'none',
                    borderRadius: '6px',
                    border: 'none',
                  }}
                  type="number"
                  min={0}
                  className=""
                />
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                </div>
                <input
                  style={{
                    outline: 'none',
                    borderRadius: '6px',
                    border: 'none',
                  }}
                  type="number"
                  min={1}
                  className=""
                />
              </div>
            </div>

            <br />

            <button
              style={{
                backgroundColor: '#003580',
                borderRadius: '6px',
                border: 'none',
              }}
            >
              Search
            </button>
          </div>
          <div className="listResult">
            <div>{hotelsByCity.length}</div>
            {hotelsByCity.map((hotel) => (
              <SearchItem hotel={hotel} key={hotel._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hotelsbycity;

