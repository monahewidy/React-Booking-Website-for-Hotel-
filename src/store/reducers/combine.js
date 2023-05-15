import { combineReducers } from "redux";
import hotelreducer from "./reducer";
import searchReducer from "./searchReducer";
import userReducer from "./loginRegister";
import heartToggleReducer from './toggleReduce';
import cityreducer from './citiesReducer';
import reservationReducer from "./reservation";
import getOneHotel from "./onehotel";
import activitiesReducer from "./activitiesReducers";
import toursReducer from './toursReducer';

export default combineReducers({
    hotels: hotelreducer,
    search: searchReducer,
    users: userReducer,
    haertToggleReducer: heartToggleReducer,
    cities: cityreducer,
    reservations: reservationReducer,
    getoneHotel: getOneHotel,
    activities: activitiesReducer,
    tours: toursReducer,
})
