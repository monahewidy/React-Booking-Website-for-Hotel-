import getActivities from '../../store/actions/activities';

/////
import React, { useEffect, useState } from 'react';
import './activities.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation } from 'react-router-dom';
import ActivityProperties from '../../components/activityProperties/activityProperties';
import { useSelector, useDispatch } from 'react-redux';
import searchByCity from '../../store/actions/searchAction';

const Activities = () => {
  const location = useLocation();

  const [date, setDate] = useState(location.state?.date || '');
  const [options, setOptions] = useState(location.state?.options || {});
  const [openDate, setOpenDate] = useState(false);
  const Acti = useSelector((state) => state.activities.getactivities);
  const hotelsByCity = useSelector((state) => state.search.hotelsByCity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchByCity());
  }, []);

  useEffect(() => {
    dispatch(getActivities());
  });

  return (
    <>
      <Navbar />
      <Header />
     
         
           
            <ActivityProperties />
           
            </>
  )
};
export default Activities;
