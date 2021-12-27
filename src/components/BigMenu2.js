import React, { useEffect, useState } from "react";
import Typical from "react-typical";
import BackgroundSlider from "react-background-slider";
import apiBG from "../assets/bigMenu/apiBG.png";
import agriBG from "../assets/bigMenu/agriBG.png";
import liveBG from "../assets/bigMenu/liveBG.jpg";
import hydroBG from "../assets/bigMenu/hydroBG.webp";

export const BigMenu2 = ({ setRoute }) => {
  const [menuRoute, setMenuRoute] = useState();

  const ps = [
    "We focus on pasture-based, encouraging biodiversity, healthy soil, and humane treatment of animals. Our priorities are pasture and restrictions on the use of antibiotics and hormones.",
    "This is an approach we have incorporated into our ranch management plan. The key to regenerative agriculture is that it not only “does no harm” to the land but actually improves it, using technologies that regenerate and revitalize the soil and the environment. ",
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

  const pause = () => {};

  useEffect(() => {
    window.setTimeout(() => {
      ind === 3 ? setInd(0) : setInd(ind + 1);
    }, 7000);

    setP(ps[ind]);
    seth1(h1s[ind]);
  }, [ind]);

  return (
    <div className="menuCont tc">
      <BackgroundSlider
        images={[liveBG, agriBG, apiBG, hydroBG]}
        duration={6}
        transition={1}
      />
      <div className="textCarouselCont tc">
        <div className="textCarouselBG">
          <h2 className="carouselTitle">{h1}</h2>
          <p className="carouselP tc">
            <b>{p}</b>
          </p>
          <button
            className="btnLearn pointer grow"
            onClick={() => setRoute("")}
          >
            Learn more
          </button>
        </div>
      </div>

      <div className="menu">
        <div className="menuItem" id="Mapi">
          <div className="menuTCont">
            <h1
              className="Mtitle2 pointer tb"
              onClick={() => setInd(2)(pause())}
            >
              Apiculture
            </h1>
          </div>
        </div>
        <div className="menuItem" id="Mhydro">
          <div className="menuTCont">
            <h1
              className="Mtitle2 pointer tb"
              onClick={() => setInd(3)(pause())}
            >
              Hydroponic System
            </h1>
          </div>
        </div>
        <div className="menuItem" id="Magri">
          <div className="menuTCont">
            <h1
              className="Mtitle2 pointer tb"
              onClick={() => setInd(1)(pause())}
            >
              Regenerative Agriculture
            </h1>
          </div>
        </div>
        <div className="menuItem" id="Mlive">
          <div className="menuTCont">
            <h1
              className="Mtitle2 pointer tb"
              onClick={() => setInd(0)(pause())}
            >
              Organic Livestock
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
