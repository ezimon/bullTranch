import React from "react";
import tel from "../assets/icons/tel.png";
import mail from "../assets/icons/mail.png";
import map from "../assets/icons/map.png";

export const FooterSmall = ({ setRoute }) => {
  return (
    <div className="footersmall">
      <div className="iContsmall tc">
        <img alt="" src={tel} alt="" className="foIcon" />
        <a
          href="tel:+1 (301) 359 6015"
          style={{
            color: "#fff4b6",
          }}
        >
          <p>+1 (301) 359 6015</p>
        </a>
      </div>
      <div className="iContsmall tc spTab" onClick={() => setRoute("contact")}>
        <img alt="" src={mail} alt="" className="foIcon" />
        <p style={{ textDecoration: "underline" }}>Send e-mail</p>
      </div>
      <div className="iContsmall tc">
        <img alt="" src={map} alt="" className="foIcon" />
        <p>116 BUCK CREEK TRAIL ALVA WY 82711-9600</p>
      </div>
    </div>
  );
};
