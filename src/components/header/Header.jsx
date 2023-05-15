import {
  faBed,
  faCalendarDays,
  faCar,
  faHeart,
  faPerson,
  faPlane,
  faTaxi,
  FaMoneyBillAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import changeHeart from "../../store/actions/heartToggleAction";
import { useSelector } from "react-redux";
import { Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";

const Header = ({ type }) => {
  useEffect(() => {
    setRender((prev) => !prev);
  }, []);

  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [render, setRender] = useState(false);
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      // endDate: (new Date()),
      endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      key: "selection",
    },
  ]);
  // const favMovie = useSelector((state) => state.haertToggleReducer.favMovies);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  const activities = () => {
    navigate("/activities", { state: { destination, date, options } });
  };
  const tours = () => {
    navigate("/tours", { state: { destination, date, options } });
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="header col-md-12">
      <div
        className={
          type === "list"
            ? "headerContainer mx-auto listMode"
            : "headerContainer mx-auto"
        }
      >
        <Navbar expand="sm">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link href="#stays">
                <FontAwesomeIcon icon={faBed} color="white" className="mr-2" />
                <span className="text-white"> {t("Stays")} </span>
              </Nav.Link>

            
              <Nav.Link href="#car-rentals">
                <FontAwesomeIcon icon={faCar} color="white" className="mr-2" />
                <span className="text-white"> {t("Car rentals")} </span>
              </Nav.Link>
              
  <Nav.Link href="#flights">
                <FontAwesomeIcon
                  icon={faPlane}
                  color="white"
                  className="mr-2"
                />
                <span className="text-white"> {t("Flights")} </span>
              </Nav.Link>

              <Nav.Link href="/activities">

<FontAwesomeIcon icon={faPlane} color="white" className="mr-2" />

<span className="text-white mx-2"> {t("Activities")} </span>

</Nav.Link>




<Nav.Link href="/tours">

<FontAwesomeIcon icon={faPlane} color="white" className="mr-2" />

 <span className="text-white mx-2"> {t("Tours")} </span>

 </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to={"/MyWishList"}>
              <FontAwesomeIcon icon={faHeart} color="white" className="mr-2" />
              <span className="text-white">{t("Favorites")}</span>
              <Badge pill className="ml-2" style={{ backgroundColor: "red" }}>
                {favorites.length}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              {t("A lifetime of discounts? It's Genius.")}
            </h1>
            <p className="headerDesc">
              {t(
                "Get rewarded for your travels – unlock instant savings of 10% or more with a free booking account"
              )}
            </p>
            <button className="headerBtn">{t("Sign in / Register")}</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />

                <input
                  type="text"
                  placeholder={t("Where are you going?")}
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} ${t("adult")} · ${options.children} ${t(
                  "children"
                )} · ${options.room} ${t("room")}`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">{t("Adult")}</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">{t("Children")}</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">{t("Room")}</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  {t("Search")}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
