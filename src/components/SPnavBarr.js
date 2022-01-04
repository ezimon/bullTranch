import React from "react";
import apiIcon from "../assets/icons/api.png";
import agriIcon from "../assets/icons/agri.png";
import liveIcon from "../assets/icons/live.png";
import hydroIcon from "../assets/icons/hydro.png";

export const SPnavBarr = ({ setInd, prog, ind }) => {
  return (
    <div className="hoMenuSmall">
      <div className="progContsmall">
        <div
          className="progBar"
          style={{
            width: `${JSON.stringify(prog)}%`,
          }}
        ></div>
      </div>
      <div className="navbarCont">
        <img
          className={
            ind === 0
              ? "slctds navbarIcon grow pointer"
              : "navbarIcon grow pointer"
          }
          src={liveIcon}
          alt=""
          onClick={() => setInd(0)}
        />
        <img
          className={
            ind === 1
              ? "slctds navbarIcon grow pointer"
              : "navbarIcon grow pointer"
          }
          src={agriIcon}
          alt=""
          onClick={() => setInd(1)}
        />
        <img
          className={
            ind === 2
              ? "slctds navbarIcon grow pointer"
              : "navbarIcon grow pointer"
          }
          src={apiIcon}
          alt=""
          onClick={() => setInd(2)}
        />
        <img
          className={
            ind === 3 
              ? "slctds navbarIcon grow pointer"
              : "navbarIcon grow pointer"
          }
          src={hydroIcon}
          alt=""
          onClick={() => setInd(3)}
        />
      </div>
    </div>
  );
};
