import React from "react";

export const BigMenu1 = ({ setRoute }) => {
  return (
    <div className="menu1 tc">
      <div onClick={() => setRoute("apiculture")}>
        <h1 className="Mtitle1">Apiculture</h1>
      </div>
      <div onClick={() => setRoute("hydroponic")}>
        <h1 className="Mtitle1">Hydroponic System</h1>
      </div>
      <div onClick={() => setRoute("agriculture")}>
        <h1 className="Mtitle1">Regenerative Agriculture</h1>
      </div>
      <div onClick={() => setRoute("livestock")}>
        <h1 className="Mtitle1">Organic Livestock</h1>
      </div>
    </div>
  );
};
