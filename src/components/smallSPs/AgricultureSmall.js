import React from "react";
import agriBG from "../../assets/bigMenu/agriBGsmall.jpg";
import { FooterSmall } from "../FooterSmall";

export const AgricultureSmall = ({ display, setRoute }) => {
  return (
    <div>
      <div id="backgroundSmall">
        <img src={agriBG} alt="" className="bgImgHome legible" />
      </div>
      <br />
      <div className="aboutWidth">
        <h1 className="spTitle conTitle">Regenerative Agriculture:</h1>
        <div className="spBodyTxt">
          <div className="subP">
            <h2>The Ultimate Goal is:</h2>
            <h4>To Conserve and Rehabilitate the Land as it is Farmed.</h4>
          </div>
          <p>
            Regenerative agriculture leads to <b>healthy soil</b>, capable of
            producing high quality, nutrient dense food while simultaneously
            improving, rather than degrading land, and ultimately leading to
            productive farms and healthy communities and economies. We use{" "}
            <b>planting methods</b> that take as little moisture out of the soil
            as possible. Then, when the crops come off, the cattle immediately
            go on the fields. By doing this, nutrients and biology are infused
            back into our fields. Not only does the land benefit, this also{" "}
            <b>provides nutrients</b> for the cattle using crop aftermath.
          </p>
          <br />
          <div className="subP">
            <h2>Why Regenerative Agriculture?</h2>
          </div>
          <p>
            The loss of the world’s fertile soil and biodiversity, along with
            the loss of indigenous seeds and knowledge, pose a mortal threat to
            our future survival. According to soil scientists, at current rates
            of soil destruction (i.e. decarbonization, erosion, desertification,
            chemical pollution), within <b>50 years</b> we will not only suffer
            serious damage to public health due to a qualitatively degraded food
            supply characterized by diminished nutrition and loss of important
            trace minerals, but we will literally no longer have enough arable
            topsoil to feed ourselves. Without protecting and regenerating the
            soil on our 4 billion acres of cultivated farmland, 8 billion acres
            of pastureland, and 10 billion acres of forest land, it will be
            impossible to feed the world, keep global warming below 2 degrees
            Celsius, or halt the loss of biodiversity.
            <br />
            <br />
            <b>
              We support all agriculture and are proud to be a part of the
              farmers and ranchers who provide food for our nation
            </b>
            , as we continue to grow in this practice of organic farming and
            ranching. We believe this practice is not only better for you, but
            also for the land. From beginning to finish, we raise our crops and
            cattle, on our ranch in North-East Wyoming.
          </p>
          <br />
        </div>
      </div>
      <FooterSmall setRoute={setRoute} />
    </div>
  );
};
