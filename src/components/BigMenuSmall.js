import React from "react";
import liveBG from "../assets/bigMenu/liveBG.jpg";

export const BigMenuSmall = ({ setRoute }) => {
  return (
    <div className="tc">
      <br />
      <br />
      <br />
      <br />
      <h1 className="conTitle bigger">
        <b>Our services:</b>
      </h1>
      <div className="width-70">
        <div onClick={() => setRoute("hydroponic")} className="smallmenutab grow pointer" id="hydrow">
          <h2 className="pointer">Hydroponic System</h2>
        </div>
        <div onClick={() => setRoute("livestock")} className="smallmenutab grow pointer" id="livew">
          <h2 className="pointer">Organic Livestock</h2>
        </div>
        <div onClick={() => setRoute("apiculture")} className="smallmenutab grow pointer" id="apiw">
          <h2 className="pointer">Apiculture</h2>
        </div>
        <div onClick={() => setRoute("agriculture")} className="smallmenutab grow pointer" id="agriw">
          <h2 className="pointer">Regenerative Agriculture</h2>
        </div>
      </div>
    </div>
  );
};
