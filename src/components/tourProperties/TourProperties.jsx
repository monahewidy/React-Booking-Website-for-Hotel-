import "./tourProperties.css";
import getTours from "../../store/actions/tours";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const TourProperties = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const Tour = useSelector((state) => state.tours.gettours);
  useEffect(() => {
    dispatch(getTours());
  });
  return (
    <>
      <div></div>
      <div className="fp">
        {Tour.map(function (tour) {
          return (
            <div key={tour._id}>
              <div className="fpItem">
                <img
                  className="fpImg"
                  variant="top"
                  src={tour.TourImages[0]}
                  alt=""
                />
              </div>
              <h2 className="fpCity">
                {t("CityName", {
                  cityName: tour.City.CityName,
                  ARCityName: tour.City.ARCityName,
                })}
              </h2>
              <span className="fpName">
                {t("Name", { name: tour.Name, ARName: tour.ARName })}
              </span>
              <p className="fpPrice">
                <span>{t("TicketPrice")}</span>
                {tour.TicketPrice}
              </p>
              <div className="fpRating">
                <button>8.9</button>
                <span>{t("Excellent")}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TourProperties;
