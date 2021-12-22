import React from "react";

export const BigMenu = ({ setRoute }) => {
  let barW = "100%";

  return (
    <div className="menuCont">
      <div className="menu">
        <div
          className="menuItem"
          id="Mapi"
          onClick={() => setRoute("apiculture")}
        >
          <div className="menuTCont">
            <h1 className="Mtitle">Apiculture</h1>
          </div>
        </div>
        <div
          className="menuItem"
          id="Mhydro"
          onClick={() => setRoute("hydroponic")}
        >
          <div className="menuTCont">
            <h1 className="Mtitle">Hydroponic System</h1>
          </div>
        </div>
        <div
          className="menuItem"
          id="Magri"
          onClick={() => setRoute("agriculture")}
        >
          <div className="menuTCont">
            <h1 className="Mtitle">Regenerative Agriculture</h1>
          </div>
        </div>
        <div
          className="menuItem"
          id="Mlive"
          onClick={() => setRoute("livestock")}
        >
          <div className="menuTCont">
            <h1 className="Mtitle">Organic Livestock</h1>

          <div className="progCont">
            <div
              className="progBar"
              style={{
                width: barW,
              }}
            ></div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};
