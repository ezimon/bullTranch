import React from "react";

export const BigMenu = ({ setRoute }) => {
  return (
    <div className="menuCont">
      <div className="menu">
        <div
          className="menuItem"
          id="Mapi"
          onClick={() => setRoute("apiculture")}
        >
          <div>
            <h1 className="Mtitle">Apiculture</h1>
          </div>
        </div>
        <div
          className="menuItem"
          id="Mhydro"
          onClick={() => setRoute("hydroponic")}
        >
          <div>
            <h1 className="Mtitle">Hydroponic System</h1>
          </div>
        </div>
        <div
          className="menuItem"
          id="Magri"
          onClick={() => setRoute("agriculture")}
        >
          <div>
            <h1 className="Mtitle">Regenerative Agriculture</h1>
          </div>
        </div>
        <div
          className="menuItem"
          id="Mlive"
          onClick={() => setRoute("livestock")}
        >
          <div>
            <h1 className="Mtitle">Organic Livestock</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
