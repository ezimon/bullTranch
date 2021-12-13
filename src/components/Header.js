import React from "react";
import mainlogo from "../assets/logo.png";

export const Header = () => {
  return (
      <div className="header">
        <img src={mainlogo} alt="Bull T Ranch" className="headerLogo" />
        <ul className="tabs">
            <li className="tab grow" >Home</li>
            <li className="tab grow" >Who we are</li>
            <li className="tab grow" >Contact us</li>
        </ul>
      </div>
  );
};
