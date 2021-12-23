import React from "react";
import tel from "../assets/icons/tel.png";
import mail from "../assets/icons/mail.png";
import map from "../assets/icons/map.png";

export const Footer = () => {
  return (
      <div className="footer">
        <div className="iCont tc">
          <img alt="" src={tel} alt="" className="foIcon" />
          <p>+1</p>
        </div>
        <div className="iCont tc">
          <img alt="" src={mail} alt="" className="foIcon" />
          <p>bulltranch@whyw8t.com</p>
        </div>
        <div className="iCont tc">
          <img alt="" src={map} alt="" className="foIcon" />
          <p>116 BUCK CREEK TRAIL ALVA WY 82711-9600</p>
        </div>
      </div>
  );
};
