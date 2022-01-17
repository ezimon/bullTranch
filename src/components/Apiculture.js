import React from "react";
import apiBG from "../assets/bigMenu/apiBG.jpg";
import scroll from "../assets/mouse.png";
import { Footer } from "./Footer";
import { SpNav } from "./SpNav";
import { ApicultureSmall } from "./smallSPs/ApicultureSmall";

export const Apiculture = ({ setRoute, route, display }) => {
  return (
    <div>
      {display === "phone" || display === "Vtablet" ? (
        <ApicultureSmall setRoute={setRoute} route={route} display={display} />
      ) : (
        <div className="special">
          <SpNav setRoute={setRoute} route={route} />
          <div className="shadowImg">
            <img alt="" alt="" src={apiBG} className="bgImg" />
            <div className="Cont">
              <h1 className="spTitle ">Apiculture</h1>
              <p className="paragraph subP">
                We promote honey bee health and sustainability. Continuously
                improve beekeeping tools, techniques, and practices. And always
                produce the highest quality, pure honey and beeswax.
              </p>
              <br />
              <img alt="" src={scroll} alt="" className="mouse" />
            </div>
          </div>

          <div className="spBody">
            <div className="width-70">
              <h1 className="subtitle">Our Mission:</h1>
              <p className="paragraph">
                We are always looking for ways to make our work more efficient.
                Our philosophy is to share our knowledge and experience with
                other beekeepers to improve the overall beekeeping industry.
                Through years of trial and error, we have developed a few tools
                that have proven to save us time and save our backs from the
                constant bending and lifting.
              </p>
            </div>
            <br />
            <div className="width-70">
              <h1 className="subtitle">The importance of Bees</h1>
              <p className="paragraph">
                <b>It Helps the Environment</b> <br />
                Bees are pollinators which transfer pollen from one flower to
                another. This fertilizes plants so that they can grow and
                reproduce. Not only are bees{" "}
                <b>critical to agriculture and growing food</b>, accounting for
                as much as 30% of the world's food production, they're necessary
                for <b>wild plants as well</b>. It's estimated that as many as
                90% of wild plants rely on pollinators like bees to survive and
                thrive. Without bees, many of these plants would just die off.
                Bees don't only help the immediate area where they're kept. They
                can gather nectar and pollen from miles around, spreading
                diversity and sustainability throughout the ecosystem that
                they're a part of.
                <br />
                <br />
                <br />
              </p>
              <hr />
            </div>
            <Footer display={display} setRoute={setRoute} route={route} />
          </div>
        </div>
      )}
    </div>
  );
};
