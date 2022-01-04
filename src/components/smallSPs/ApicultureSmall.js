import React from "react";
import apiBG from "../../assets/bigMenu/apiBGsmall.jpg";
import { FooterSmall } from "../FooterSmall";

export const ApicultureSmall = ({ display, setRoute }) => {
  return (
    <div>
      <div id="backgroundSmall">
        <img src={apiBG} alt="" className="bgImgHome legible" />
      </div>
      <br />
      <div className="aboutWidth">
        <h1 className="spTitle conTitle">Apiculture</h1>
        <div className="spBodyTxt">
          <div className="subP">
            <h2>Our Mission:</h2>
          </div>
          <p>
            We are always looking for ways to make our work more efficient. Our
            philosophy is to share our knowledge and experience with other
            beekeepers to improve the overall beekeeping industry. Through years
            of trial and error, we have developed a few tools that have proven
            to save us time and save our backs from the constant bending and
            lifting.
          </p>
          <br />
          <div className="subP">
            <h2>The importance of Bees</h2>
          </div>
          <p>
            <b> It Helps the Environment </b> <br />
            Bees are pollinators which transfer pollen from one flower to
            another. This fertilizes plants so that they can grow and reproduce.
            Not only are bees <b>critical to agriculture and growing food</b>,
            accounting for as much as 30% of the world's food production,
            they're necessary for <b>wild plants as well</b>. It's estimated
            that as many as 90% of wild plants rely on pollinators like bees to
            survive and thrive. Without bees, many of these plants would just
            die off. Bees don't only help the immediate area where they're kept.
            They can gather nectar and pollen from miles around, spreading
            diversity and sustainability throughout the ecosystem that they're a
            part of.
          </p>
          <br />
        </div>
      </div>
      <FooterSmall setRoute={setRoute} />
    </div>
  );
};
