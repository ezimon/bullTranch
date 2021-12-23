import React from "react";
import mainlogo from "../assets/logo.png";

export const Header = ({ setRoute }) => {
  return (
    <div className="header">
        <img
          src={mainlogo}
          onClick={() => setRoute("home")}
          alt="Bull T Ranch"
          className="headerLogo grow"
        />
      <ul className="tabs">
        <b>
          <li className="tab grow" onClick={() => setRoute("contact")}>
            Contact us
          </li>
          <li className="tab grow" onClick={() => setRoute("about")}>
            Who we are
          </li>
          <li className="tab grow" onClick={() => setRoute("home")}>
            Home
          </li>
        </b>
      </ul>
    </div>
  );
};
