import "./featured.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sethotel from "../../store/actions/action";
import { useTranslation } from "react-i18next";

const Featured = () => {
  const { t } = useTranslation();
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const hotels = useSelector((state) => state.hotels.gethotels);

  useEffect(() => {
    dispatch(sethotel(page));
  });

  return (
    <div className="featured">
      <>
        <div className="d-flex ">
          {hotels.map((allhotels) => {
            return (
              <div key={allhotels.name}>
                <div className="featuredItem  ">
                  <img
                    className=" m-4 featuredImg"
                    variant="top"
                    src={allhotels.HotelImg}
                    alt=""
                  />
                  <div className="featuredTitles ms-3">
                    <h5>{allhotels.name}</h5>
                    <h6>
                      {" "}
                      {t("cityCountry", {
                        city: allhotels.Address.City,
                        ARCity: allhotels.ARCity,
                        country: allhotels.Address.Country,
                        ARCountry: allhotels.ARCountry,
                      })}
                    </h6>
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
export default Featured;
