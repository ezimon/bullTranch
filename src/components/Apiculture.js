import React from "react";
import apiBG from "../assets/bigMenu/apiBG.png";
import scroll from "../assets/mouse.png";
import { Footer } from "./Footer";

export const Apiculture = () => {
  return (
    <div className="special">
      <div className="shadowImg">
        <img src={apiBG} className="bgImg" />
        <div className="Cont">
          <h1 className="spTitle tl">Apiculture:</h1>
          <p className="paragraph subP">
            We promote honey bee health and sustainability. Continuously improve
            beekeeping tools, techniques, and practices. And always produce the
            highest quality, pure honey and beeswax.
          </p>
          <br />
          <img src={scroll} alt="" className="mouse" />
        </div>

        <div className="spBody">
          <div className="width-70">
            <h1 className="subtitle">Our Mission:</h1>
            <p className="paragraph">
              We are always looking for ways to make our work more efficient.
              Our philosophy is to share our knowledge and experience with other
              beekeepers to improve the overall beekeeping industry. Through
              years of trial and error, we have developed a few tools that have
              proven to save us time and save our backs from the constant
              bending and lifting.
            </p>
          </div>
          <div className="width-70">
            <h1 className="subtitle">The importance of Bees</h1>
            <p className="paragraph">
              It Helps the Environment Bees are pollinators which transfer
              pollen from one flower to another. This fertilizes plants so that
              they can grow and reproduce. Not only are bees critical to
              agriculture and growing food, accounting for as much as 30% of the
              world's food production, they're necessary for wild plants as
              well. It's estimated that as many as 90% of wild plants rely on
              pollinators like bees to survive and thrive. Without bees, many of
              these plants would just die off. Bees don't only help the
              immediate area where they're kept. They can gather nectar and
              pollen from miles around, spreading diversity and sustainability
              throughout the ecosystem that they're a part of.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
