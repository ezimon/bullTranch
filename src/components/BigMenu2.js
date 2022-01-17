import React, { useEffect, useState } from "react";
import apiBG from "../assets/bigMenu/apiBG.jpg";
import agriBG from "../assets/bigMenu/agriBG.jpg";
import liveBG from "../assets/bigMenu/liveBG.jpg";
import hydroBG from "../assets/bigMenu/hydroBG.webp";

export const BigMenu2 = ({ setRoute, display }) => {
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

    prog >= 100 || prog <= 1 ? setBgAnim(true) : setBgAnim(false);
  }, [prog]);

  let className = "";

  return (
    <div>
      {bgAnim ? null : <img src={bgImg} className="bgImg" />}
      <div className="menuCont tc">
        {bgAnim ? null : (
          <div className="textCarouselCont tc">
            <div className="textCarouselBG">
              <h2 className="carouselTitle">{h1}</h2>
              <p className="carouselP tc">
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

        <div className="menu">
          <div
            className="menuItem pointer"
            id={ind === 0 ? "hoverId" : "Mlive"}
          >
            <div className="menuTCont">
              <h1 className="Mtitle2 pointer tb" onClick={() => setInd(0)}>
                Organic Livestock
              </h1>
            </div>
            {ind === 0 ? (
              <div className="progCont">
                <div
                  className="progBar"
                  style={{
                    width: JSON.stringify(prog) + "%",
                  }}
                ></div>
              </div>
            ) : null}
          </div>

          <div
            className="menuItem pointer"
            id={ind === 1 ? "hoverId" : "Magri"}
          >
            <div className="menuTCont">
              <h1 className="Mtitle2 pointer tb" onClick={() => setInd(1)}>
                Regenerative Agriculture
              </h1>
            </div>
            {ind === 1 ? (
              <div className="progCont">
                <div
                  className="progBar"
                  style={{
                    width: JSON.stringify(prog) + "%",
                  }}
                ></div>
              </div>
            ) : null}
          </div>
          <div className="menuItem pointer" id={ind === 2 ? "hoverId" : "Mapi"}>
            <div className="menuTCont">
              <h1 className="Mtitle2 pointer tb" onClick={() => setInd(2)}>
                Apiculture
              </h1>
            </div>
            {ind === 2 ? (
              <div className="progCont">
                <div
                  className="progBar"
                  style={{
                    width: JSON.stringify(prog) + "%",
                  }}
                ></div>
              </div>
            ) : null}
          </div>

          <div
            className="menuItem pointer"
            id={ind === 3 ? "hoverId" : "Mhydro"}
          >
            <div className="menuTCont">
              <h1 className="Mtitle2 pointer tb" onClick={() => setInd(3)}>
                Hydroponic System
              </h1>
            </div>
            {ind === 3 ? (
              <div className="progCont">
                <div
                  className="progBar"
                  style={{
                    width: JSON.stringify(prog) + "%",
                  }}
                ></div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
