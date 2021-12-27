import React, { useState, useEffect } from "react";
import { BigMenu } from "./BigMenu";
import { BigMenu2 } from "./BigMenu2";
import apiBG from "../assets/bigMenu/apiBG.png";
import agriBG from "../assets/bigMenu/agriBG.png";
import liveBG from "../assets/bigMenu/liveBG.jpg";
import hydroBG from "../assets/bigMenu/hydroBG.webp";
import { Style } from "react-style-tag";
import BackgroundSlider from "react-background-slider";

export const Home = ({ setRoute, route }) => {
  // const BgImgs = [liveBG, agriBG, apiBG, hydroBG];
  // const [ind, setInd] = useState(0);

  return (
    <div>
      {/* <div className="component tc"> */}
      <BigMenu2 setRoute={setRoute} route={route} />
      {/* </div> */}
    </div>
  );
};
