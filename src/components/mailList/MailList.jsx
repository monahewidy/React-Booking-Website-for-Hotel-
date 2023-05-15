import "./mailList.css";
import { useTranslation } from "react-i18next";

const MailList = () => {
  const { t } = useTranslation();

  return (
    <div className="mail">
      <h1 className="mailTitle">{t("Save time, save money!")}</h1>
      <span className="mailDesc">
        {t("Sign up and we'll send the best deals to you")}
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>{t("Subscribe")}</button>
      </div>
    </div>
  );
};

export default MailList;
