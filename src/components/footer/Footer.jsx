import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">{t("countries")}</li>
          <li className="fListItem">{t("regions")}</li>
          <li className="fListItem">{t("cities")}</li>
          <li className="fListItem">{t("districts")}</li>
          <li className="fListItem">{t("airports")}</li>
          <li className="fListItem">{t("hotels")}</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">{t("homes")}</li>
          <li className="fListItem">{t("apartments")}</li>
          <li className="fListItem">{t("resorts")}</li>
          <li className="fListItem">{t("villas")}</li>
          <li className="fListItem">{t("hostels")}</li>
          <li className="fListItem">{t("guestHouses")}</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">{t("uniquePlacesToStay")}</li>
          <li className="fListItem">{t("reviews")}</li>
          <li className="fListItem">{t("unpackedTravelArticles")}</li>
          <li className="fListItem">{t("travelCommunities")}</li>
          <li className="fListItem">{t("seasonalAndHolidayDeals")}</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">{t("carRental")}</li>
          <li className="fListItem">{t("flightFinder")}</li>
          <li className="fListItem">{t("restaurantReservations")}</li>
          <li className="fListItem">{t("travelAgents")}</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">{t("customerService")}</li>
          <li className="fListItem">{t("partnerHelp")}</li>
          <li className="fListItem">{t("careers")}</li>
          <li className="fListItem">{t("sustainability")}</li>
          <li className="fListItem">{t("pressCenter")}</li>
          <li className="fListItem">{t("safetyResourceCenter")}</li>
          <li className="fListItem">{t("investorRelations")}</li>
          <li className="fListItem">{t("termsAndConditions")}</li>
        </ul>
      </div>
      <div className="fText">{t("copyRight")}</div>
    </div>
  );
};

export default Footer;
