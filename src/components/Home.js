import React from "react";
import { BigMenu } from "./BigMenu";
import apiBG from "../assets/bigMenu/apiBG.png";
import agriBG from "../assets/bigMenu/agriBG.png";
import liveBG from "../assets/bigMenu/liveBG.jpg";
import hydroBG from "../assets/bigMenu/hydroBG.webp";
import BackgroundSlider from "react-background-slider";

export const Home = ({ setRoute, route }) => {
  return (
    <div className="noscroll">
      <BackgroundSlider
        images={[liveBG, agriBG, apiBG, hydroBG]}
        duration={10}
        transition={1}
        className="bgImg"
      />
      {/* <img src={apiBG} className="bgImg" /> */}
      <div className="component tc">
        <BigMenu setRoute={setRoute} route={route} />
      </div>
    </div>
  );
};
