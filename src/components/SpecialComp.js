import React from "react";
import apiBG from "../assets/bigMenu/apiBG.png";
import liveBG from "../assets/bigMenu/liveBG.png";
import hydroBG from "../assets/bigMenu/hydroBG.png";
import agriBG from "../assets/bigMenu/agriBG.png";
import scroll from "../assets/mouse.png"
import { Footer } from "./Footer";



export const SpecialComp = () => {
  return (
    <div className="special">
      <div className="shadowImg">
        <img src={apiBG} className="bgImg" />
        <div className="Cont">
          <h1 className="spTitle tl">Apiculture:</h1>
          <p className="paragraph">
            {/* <b> */}
              We promote honey bee health and sustainability. Continuously
              improve beekeeping tools, techniques, and practices. And always
              produce the highest quality, pure honey and beeswax.
            {/* </b> */}
          </p>
              <br />
              <img src={scroll} alt="" className="mouse" />
              <p>↓</p>
        </div>
        <div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};
