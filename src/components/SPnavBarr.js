import React from "react";
import apiIcon from "../assets/icons/api.png";
import agriIcon from "../assets/icons/agri.png";
import liveIcon from "../assets/icons/live.png";
import hydroIcon from "../assets/icons/hydro.png";

export const SPnavBarr = ({ setInd, prog, ind }) => {
  return (
    <div className="hoMenuSmall">
      <div className="navbarCont">
        <div>
          {ind === 0 ? (
            <div className="progContsmall">
              <div
                className="progBar"
                style={{
                  width: `${JSON.stringify(prog)}%`,
                }}
              ></div>
            </div>
          ) : null}
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
        </div>
        <div>
          {ind === 1 ? (
            <div className="progContsmall">
              <div
                className="progBar"
                style={{
                  width: `${JSON.stringify(prog)}%`,
                }}
              ></div>
            </div>
          ) : null}
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
        </div>
        <div>
          {ind === 2 ? (
            <div className="progContsmall">
              <div
                className="progBar"
                style={{
                  width: `${JSON.stringify(prog)}%`,
                }}
              ></div>
            </div>
          ) : null}
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
        </div>
        <div>
          {ind === 3 ? (
            <div className="progContsmall">
              <div
                className="progBar"
                style={{
                  width: `${JSON.stringify(prog)}%`,
                }}
              ></div>
            </div>
          ) : null}
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
    </div>
  );
};
