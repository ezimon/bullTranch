import React from "react";
import liveBG from "../assets/bigMenu/liveBG.jpg";

export const BigMenuSmall = ({ setRoute }) => {
  return (
    <div className="tc">
      <br />
      <br />
      <br />
      <h1>
        Welcome to <b>Bull T Ranch</b>
        <br />
        we offer:
      </h1>
      <br />
      <div onClick={() => setRoute("apiculture")}>
        <h1 className="pointer grow">Apiculture</h1>
      </div>
      <div onClick={() => setRoute("hydroponic")}>
        <h1 className="pointer grow">Hydroponic System</h1>
      </div>
      <div onClick={() => setRoute("agriculture")}>
        <h1 className="pointer grow">Regenerative Agriculture</h1>
      </div>
      <div onClick={() => setRoute("livestock")}>
        <h1 className="pointer grow">Organic Livestock</h1>
      </div>
    </div>
  );
};
