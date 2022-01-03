import React, { useState, useEffect } from "react";
import apiBG from "../assets/bigMenu/apiBGsmall.jpg";
import agriBG from "../assets/bigMenu/agriBGsmall.jpg";
import liveBG from "../assets/bigMenu/liveBGsmall2.jpg";
import hydroBG from "../assets/bigMenu/hydroBGsmall.jpg";
import { SPnavBarr } from "./SPnavBarr";

export const BigMenuSmall2 = ({ setRoute }) => {
  const routes = ["livestock", "agriculture", "apiculture", "hydroponic"];
  const [prog, setProg] = useState(0);
  const BgImgs = [liveBG, agriBG, apiBG, hydroBG];
  const [bgImg, setBgImg] = useState(liveBG);

  const ps = [
    "We focus on pasture-based, encouraging biodiversity, healthy soil, and humane treatment of animals. Our priorities are pasture and restrictions on the use of antibiotics and hormones.",
    "The key to regenerative agriculture is that it not only “does no harm” to the land but actually improves it, using technologies that regenerate and revitalize the soil and the environment. ",
    "We promote honey bee health and sustainability. Continuously improve beekeeping tools, techniques, and practices. And always produce the highest quality, pure honey and beeswax.",
    "We use this unique method of farming that eliminates the use of soil entirely as a growing environment. Instead of the use of soil, hydroponics relies on supplying nutrition directly to the plants by using nutrient-rich water.",
  ];

  const h1s = [
    "Organic Livestock",
    "Regenerative Agriculture",
    "Apiculture",
    "Hydroponic System",
  ];

  const [ind, setInd] = useState(0);
  const [p, setP] = useState();
  const [h1, seth1] = useState();

  const seconds = 8;

  useEffect(() => {
    setP(ps[ind]);
    seth1(h1s[ind]);
    setProg(0);

    const interval = setInterval(() => {
      setProg((prog) => prog + seconds / (seconds * 10));
    }, seconds);
    return () => clearInterval(interval);
  }, [ind]);

  const [bgAnim, setBgAnim] = useState(false);

  useEffect(() => {
    setBgImg(BgImgs[ind]);
    prog >= 100 ? (ind === 3 ? setInd(0) : setInd(ind + 1)) : setInd(ind);
    prog >= 99 || prog <= 1 ? setBgAnim(true) : setBgAnim(false);
  }, [prog]);

  let className = "";

  return (
    <div className="tc">
      <div id="backgroundSmall">
        {bgAnim ? null : <img src={bgImg} className="bgImgHome" />}
      </div>
      <div>
        {bgAnim ? null : (
          <div className="textCarouselCont fadeBG tc">
            <div className="pddnTop">
              <h2 className="carouselTitlesmall">{h1}</h2>
              <p className="carouselPsmall tc">
                <b>{p}</b>
              </p>
              <button
                className="btnLearn pointer grow"
                onClick={() => setRoute(routes[ind])}
              >
                Learn more
              </button>
            </div>
          </div>
        )}
        <SPnavBarr setInd={setInd} prog={prog} />
      </div>
    </div>
  );
};
