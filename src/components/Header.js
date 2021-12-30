import React from "react";
import mainlogo from "../assets/logo.png";

export const Header = ({ setRoute, display }) => {
  return (
    <div className="header">
      {display === "desktop" || display === "Htablet" ? (
        <img
          src={mainlogo}
          onClick={() => setRoute("home")}
          alt="Bull T Ranch"
          className="headerLogo grow"
        />
      ) : null}
      <ul>
        <b>
          <li
            className={
              display === "desktop" || display === "Htablet"
                ? "tab grow"
                : "tabsmall"
            }
            onClick={() => setRoute("contact")}
          >
            Contact us
          </li>
          <li
            className={
              display === "desktop" || display === "Htablet"
                ? "tab grow"
                : "tabsmall"
            }
            onClick={() => setRoute("about")}
          >
            Who we are
          </li>
          <li
            className={
              display === "desktop" || display === "Htablet"
                ? "tab grow"
                : "tabsmall"
            }
            onClick={() => setRoute("home")}
          >
            Home
          </li>
        </b>
      </ul>
    </div>
  );
};
