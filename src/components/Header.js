import React from "react";
import mainlogo from "../assets/logo.png";
import { Hamburger } from "./Hamburger";

export const Header = ({ setRoute, display, route }) => {
  return (
    <div className="header">
      <img
        src={mainlogo}
        onClick={() => setRoute("home")}
        alt="Bull T Ranch"
        className={
          display === "desktop"
            ? "headerLogo grow"
            : "headerLogosmall pointer grow"
        }
      />

      {display === "desktop" || display === "Htablet" ? (
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
      ) : (
        <Hamburger setRoute={setRoute} route={route} />
      )}
    </div>
  );
};
