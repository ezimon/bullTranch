import React from "react";
import tel from "../assets/icons/tel.png";
import mail from "../assets/icons/mail.png";
import map from "../assets/icons/map.png";

export const Footer = ({ setRoute, route }) => {
  return (
    // {route === 'contact' || route === 'about' ? 'footer absolute' : 'footer relative'}
    <div className='footer'>
      <div className="iCont tc">
        <img alt="" src={tel} alt="" className="foIcon" />
        <p>+1 (301) 359 6015</p>
      </div>
      <div className="iCont tc spTab" onClick={() => setRoute("contact")}>
        <img alt="" src={mail} alt="" className="foIcon" />
        <p style={{ textDecoration: "underline" }}>Send e-mail</p>
      </div>
      <div className="iCont tc">
        <img alt="" src={map} alt="" className="foIcon" />
        <p>116 BUCK CREEK TRAIL ALVA WY 82711-9600</p>
      </div>
    </div>
  );
};
