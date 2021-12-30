import React from "react";

export const SpNavSmall = ({ setRoute, route }) => {
  return (
    <div className="spNavTitlesmall">
      <p className="paragraphh ">Menu:</p>
      <p
        className={
          route === "livestock" ? "grow spTabsmall selctd" : "grow spTabsmall"
        }
        onClick={() => setRoute("livestock")}
      >
        Organic Livestock
      </p>
      <p
        className={
          route === "agriculture" ? "grow spTabsmall selctd" : "grow spTabsmall"
        }
        onClick={() => setRoute("apiculture")}
      >
        Regenerative Agriculture
      </p>
      <p
        className={
          route === "apiculture" ? "grow spTabsmall selctd" : "grow spTabsmall"
        }
        onClick={() => setRoute("apiculture")}
      >
        Apiculture
      </p>
      <p
        className={
          route === "hydroponic" ? "grow spTabsmall selctd" : "grow spTabsmall"
        }
        onClick={() => setRoute("hydroponic")}
      >
        Hydroponic System
      </p>
    </div>
  );
};
