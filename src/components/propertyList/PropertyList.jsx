import "./propertyList.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosConfig from "../../axiosConfig/axiosConfig";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import setcity from "../../store/actions/citiesAction";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PropertyList = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      key: "selection",
    },
  ]);
  const [cityId, setcitId] = useState("");
  const [destination, setDestination] = useState(location.state?.destination);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const cities = useSelector((state) => state.cities.getcities);

  useEffect(() => {
    dispatch(setcity(page));
  });

  const navigate = useNavigate();
  const handleSearch = () => {
    console.log(destination);

    navigate("/hotelsbycity", { state: { destination, date } });
  };

  const seachactivity = () => {
    return (
      axiosConfig.get(`/activities/searchcity/${cityId}`),
      navigate("/activities")
    );
  };
  const seachtours = () => {
    return axiosConfig.get(`/tours/searchcity/${cityId}`), navigate("/tours");
  };

  return (
    <div className="pList">
      <>
        <div className="d-flex flex-wrap  pList">
          {cities.map(function (city) {
            return (
              <div key={city._id} className="pListItem">
                <div className="pListItem">
                  <img
                    className=" pListImg"
                    variant="top"
                    src={city.CityImage}
                    alt=""
                  />
                  <div className="pListTitles">
                    <h1
                      onMouseOver={(e) => {
                        setDestination(e.target.innerHTML), setcitId(city._id);
                      }}
                      onClick={handleSearch}
                    >
                      {t("CityNameProp", {
                        city: city.CityName,
                        ARCityName: city.ARCityName,
                      })}{" "}
                    </h1>
                    <h2>
                      {" "}
                      <span
                        onMouseOver={(e) => {
                          setDestination(city.CityName), setcitId(city._id);
                        }}
                        onClick={handleSearch}
                      >
                        hotels: {city.hotelsCount}{" "}
                      </span>
                      <span onClick={seachactivity}>
                        |{" "}
                        {t("activitiesCount", { count: city.activitiesCount })}{" "}
                      </span>
                      <span onClick={seachtours}>
                        | tours: {city.toursCount}{" "}
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
};
export default PropertyList;
