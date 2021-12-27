import React, { useState, useEffect } from "react";
import { BigMenu } from "./BigMenu";
import { BigMenu2 } from "./BigMenu2";

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
      {/* <img src={bgImg} className="bgImg" />; */}
      <div className="component tc">
        <BigMenu2 setRoute={setRoute} route={route} />
      </div>
    </div>
  );
};
