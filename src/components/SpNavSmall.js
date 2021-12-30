import React from "react";

export const SpNavSmall = ({ setRoute, route }) => {
  return (
    <div className="spNavTitlesmall">
      <p className="paragraphh ">Menu:</p>
      <p
        className={
          route === "livestock"
            ? "grow spTabsmall spTab selctd"
            : "grow spTabsmall spTab"
        }
        onClick={() => setRoute("livestock")}
      >
        Organic Livestock
      </p>
      <p
        className={
          route === "agriculture"
            ? "grow spTabsmall spTab selctd"
            : "grow spTabsmall spTab"
        }
        onClick={() => setRoute("apiculture")}
      >
        Regenerative Agriculture
      </p>
      <p
        className={
          route === "apiculture"
            ? "grow spTabsmall spTab selctd"
            : "grow spTabsmall spTab"
        }
        onClick={() => setRoute("apiculture")}
      >
        Apiculture
      </p>
      <p
        className={
          route === "hydroponic"
            ? "grow spTabsmall spTab selctd"
            : "grow spTabsmall spTab"
        }
        onClick={() => setRoute("hydroponic")}
      >
        Hydroponic System
      </p>
    </div>
  );
};
