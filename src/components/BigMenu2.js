import React, { useEffect, useState } from "react";
import Typical from "react-typical";

export const BigMenu2 = ({ setRoute }) => {
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

  useEffect(() => {
    window.setTimeout(() => {
      ind === 3 ? setInd(0) : setInd(ind + 1);
    }, 7000);

    setP(ps[ind]);
    seth1(h1s[ind]);
  }, [ind]);

  return (
    <div className="menuCont tc">
      <div className="textCarouselCont tc">
        <div className="textCarouselBG">
          <h2 className="carouselTitle">
            {h1}
            {/* <Typical
            loop={Infinity}
            wrapper="h2"
            steps={[
              "Organic Livestock",
              5000,
              "Regenerative Agriculture",
              5000,
              "Apiculture",
              5000,
              "Hydroponic System",
              5000,
            ]}
          /> */}
          </h2>
          <p className="carouselP tc">
            <b>{p}</b>
            {/* <Typical
            loop={Infinity}
            wrapper="p"
            steps={[
              "We focus on pasture-based, encouraging biodiversity, healthy soil, and humane treatment of animals. Our priorities are pasture and restrictions on the use of antibiotics and hormones.",
              9000,
              "This is an approach we have incorporated into our ranch management plan. The key to regenerative agriculture is that it not only “does no harm” to the land but actually improves it, using technologies that regenerate and revitalize the soil and the environment. ",
              9000,
              "We promote honey bee health and sustainability. Continuously improve beekeeping tools, techniques, and practices. And always produce the highest quality, pure honey and beeswax.",
              9000,
              "We use this unique method of farming that eliminates the use of soil entirely as a growing environment. Instead of the use of soil, hydroponics relies on supplying nutrition directly to the plants by using nutrient-rich water.",
              9000,
            ]}
          /> */}
          </p>
          <button className="btnLearn pointer grow">
              Learn more
          </button>
        </div>
      </div>

      <div className="menu">
        <div
          className="menuItem"
          id="Mapi"
          onClick={() => setRoute("apiculture")}
        >
          <div className="menuTCont">
            <h1 className="Mtitle2">Apiculture</h1>
          </div>
        </div>
        <div
          className="menuItem"
          id="Mhydro"
          onClick={() => setRoute("hydroponic")}
        >
          <div className="menuTCont">
            <h1 className="Mtitle2">Hydroponic System</h1>
          </div>
        </div>
        <div
          className="menuItem"
          id="Magri"
          onClick={() => setRoute("agriculture")}
        >
          <div className="menuTCont">
            <h1 className="Mtitle2">Regenerative Agriculture</h1>
          </div>
        </div>
        <div
          className="menuItem"
          id="Mlive"
          onClick={() => setRoute("livestock")}
        >
          <div className="menuTCont">
            <h1 className="Mtitle2">Organic Livestock</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
