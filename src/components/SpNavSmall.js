import React from "react";

export const SpNavSmall = ({ setRoute, route }) => {
  return (
    <div className="spNavTitlesmall">
      <p className="paragraphh ">Menu:</p>
      <p
        className="grow spTabsmall spTab"
        onClick={() => setRoute("livestock")}
      >
        Organic Livestock
      </p>
      <p
        className="grow spTabsmall spTab"
        onClick={() => setRoute("apiculture")}
      >
        Regenerative Agriculture
      </p>
      <p
        className="grow spTabsmall spTab"
        onClick={() => setRoute("apiculture")}
      >
        Apiculture
      </p>
      <p
        className="grow spTabsmall spTab"
        onClick={() => setRoute("hydroponic")}
      >
        Hydroponic System
      </p>
    </div>
  );
};
