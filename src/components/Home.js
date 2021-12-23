import React, { useState, useEffect } from "react";
import { BigMenu } from "./BigMenu";
import { BigMenu2 } from "./BigMenu2";
import apiBG from "../assets/bigMenu/apiBG.png";
import agriBG from "../assets/bigMenu/agriBG.png";
import liveBG from "../assets/bigMenu/liveBG.jpg";
import hydroBG from "../assets/bigMenu/hydroBG.webp";
import BackgroundSlider from "react-background-slider";

export const Home = ({ setRoute, route }) => {
  // const BgImgs = [liveBG, agriBG, apiBG, hydroBG];
  // const [ind, setInd] = useState(0);
  // const [bgImg, setBgImg] = useState(liveBG);

  // useEffect(() => {
  //   window.setTimeout(() => {
  //     ind === 3 ? setInd(0) : setInd(ind + 1);
  //   }, 4000);

  //   setBgImg(BgImgs[ind]);
  // }, [ind]);

  return (
    <div>
      <BackgroundSlider
        images={[liveBG, agriBG, apiBG, hydroBG]}
        duration={6}
        transition={1}
      />
      {/* <img src={bgImg} className="bgImg" />; */}
      <div className="component tc">
        <BigMenu2 setRoute={setRoute} route={route} />
      </div>
    </div>
  );
};
