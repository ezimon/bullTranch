import React from "react";
import apiBG from "../assets/bigMenu/apiBG.png";
import agriBG from "../assets/bigMenu/agriBG.png";
import liveBG from "../assets/bigMenu/liveBG.jpg";
import hydroBG from "../assets/bigMenu/hydroBG.webp";

export const SpNav = ({ setRoute, route }) => {
  return (
    <div className="spNav tr">
      {/* <p className="paragraphh spNavTitle">Menu:</p>
      {route === "apiculture" ? null : (
        <p className="grow spTab" onClick={() => setRoute("apiculture")}>
          Apiculture
        </p>
      )}
      {route === "hydroponic" ? null : (
        <p className="grow spTab" onClick={() => setRoute("hydroponic")}>
          Hydroponic system
        </p>
      )}
      {route === "agriculture" ? null : (
        <p className="grow spTab" onClick={() => setRoute("agriculture")}>
          Regenerative Agriculture
        </p>
      )}
      {route === "livestock" ? null : (
        <p className="grow spTab" onClick={() => setRoute("livestock")}>
          Organic Livestock
        </p>
      )} */}

      <div
        className={
          route === "livestock"
            ? "tabImgCont pointer grow selctd"
            : "tabImgCont pointer grow"
        }
        onClick={() => setRoute("livestock")}
      >
        <img src={liveBG} alt="" className="spTabImg" />
        <p className="spTabText">
          Organic
          <br />
          Livestock
        </p>
      </div>
      <div
        className={
          route === "agriculture"
            ? "tabImgCont pointer grow selctd"
            : "tabImgCont pointer grow"
        }
        onClick={() => setRoute("agriculture")}
      >
        <img src={agriBG} alt="" className="spTabImg" />
        <p className="spTabText">
          Regenerative
          <br />
          Agriculture
        </p>
      </div>
      <div
        className={
          route === "apiculture"
            ? "tabImgCont pointer grow selctd"
            : "tabImgCont pointer grow"
        }
        onClick={() => setRoute("apiculture")}
      >
        <img src={apiBG} alt="" className="spTabImg" />
        <p className="spTabText">Apiculture</p>
      </div>
      <div
        className={
          route === "hydroponic"
            ? "tabImgCont pointer grow selctd"
            : "tabImgCont pointer grow"
        }
        onClick={() => setRoute("hydroponic")}
      >
        <img src={hydroBG} alt="" className="spTabImgh" />
        <p className="spTabText">
          Hydroponic
          <br />
          System
        </p>
      </div>
    </div>
  );
};
