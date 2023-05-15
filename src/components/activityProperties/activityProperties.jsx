// ActivityProperties.jsx file 

import "./activityProperties.css";
import getActivities from "../../store/actions/activities"
import { useDispatch,useSelector } from "react-redux";
import {useEffect} from "react"
import MailList from "./../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const ActivityProperties = () => {
  const dispatch = useDispatch() 
  const activities = useSelector ((state) => state.activities.getactivities)
  useEffect(()=>{
    dispatch( getActivities ());
},)
  return (
    <div className="mt-5 d-flex flex-column align-items-center gap-5">

    <b>Take A holiday and Choose your Activity ^_^</b>
    <div className="fp">
    {activities.map(function(activity){
      return <div key={activity._id}>


        <div className="fpItem"> 
            <img className="fpImg" variant="top" src={activity.MainImage[0]} alt=""></img>
        </div>
        {/* <span className="fpCity">{activity.City.CityName}</span> */}
        <span className="fpName">{activity.Name}</span>
        {/* <p className="fpPrice"><span>EGP </span>{tour.TicketPrice}</p> */}
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span> 
        </div>
        </div>
        
      })}

</div>
<MailList />
<Footer />
  </div>


  );
};

export default ActivityProperties;
