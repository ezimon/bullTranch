import React from "react";

export const SpNav = ({ setRoute, route }) => {
  return (
    <div className="spNav tr">
      {route === "apiculture" ? null : (
        <p className="grow spTab" onClick={() => setRoute("apiculture")}>
          Apiculture
        </p>
      )}
      {route === "hydroponic" ? null : (
        <p className="grow spTab" onClick={() => setRoute("hydroponic")}>
          Hydroponic system
        </p>
      )}
      {route === "agriculture" ? null : (
        <p className="grow spTab" onClick={() => setRoute("agriculture")}>
          Regenerative Agriculture
        </p>
      )}
      {route === "livestock" ? null : (
        <p className="grow spTab" onClick={() => setRoute("livestock")}>
          Organic Livestock
        </p>
      )}
    </div>
  );
};
