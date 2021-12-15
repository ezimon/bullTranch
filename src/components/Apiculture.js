import React from "react";
import apiBG from "../assets/bigMenu/apiBG.png";
import { Footer } from "./Footer";

export const Apiculture = () => {
  return (
    <div className="special">
      <div className="shadowImg">
        <img src={apiBG} className="bgImg" />
        <div className="titleCont">
          <h1 className="spTitle tl">Apiculture:</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};
