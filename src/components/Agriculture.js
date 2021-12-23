import React from "react";
import apiBG from "../assets/bigMenu/agriBG.png";
import scroll from "../assets/mouse.png";
import { Footer } from "./Footer";
import { SpNav } from "./SpNav";

export const Agriculture = ({ setRoute, route }) => {
  return (
    <div className="special">
      <SpNav setRoute={setRoute} route={route} />
      <div className="shadowImg">
        <img alt="" src={apiBG} className="bgImg" />
        <div className="Cont">
          <h1 className="spTitle tl">Regenerative Agriculture:</h1>
          <p className="paragraph subP">
            This is an approach we have incorporated into our ranch management
            plan. The key to regenerative agriculture is that it not only “does
            no harm” to the land but actually improves it, using technologies
            that regenerate and revitalize the soil and the environment.
          </p>
          <br />
          <img alt="" src={scroll} alt="" className="mouse" />
        </div>
      </div>

      <div className="spBody">
        <div className="width-70">
          <h1 className="subtitle">The Ultimate Goal is:</h1>
          <h2 className="subtitle pi">
            To Conserve and Rehabilitate the Land as it is Farmed.{" "}
          </h2>
          <p className="paragraph">
            Regenerative agriculture leads to healthy soil, capable of producing
            high quality, nutrient dense food while simultaneously improving,
            rather than degrading land, and ultimately leading to productive
            farms and healthy communities and economies. We use planting methods
            that take as little moisture out of the soil as possible. Then, when
            the crops come off, the cattle immediately go on the fields. By
            doing this, nutrients and biology are infused back into our fields.
            Not only does the land benefit, this also provides nutrients for the
            cattle using crop aftermath.
          </p>
        </div>
        <br />
        <div className="width-70">
          <h1 className="subtitle">Why Regenerative Agriculture?</h1>
          <p className="paragraph">
            The loss of the world’s fertile soil and biodiversity, along with
            the loss of indigenous seeds and knowledge, pose a mortal threat to
            our future survival. According to soil scientists, at current rates
            of soil destruction (i.e. decarbonization, erosion, desertification,
            chemical pollution), within 50 years we will not only suffer serious
            damage to public health due to a qualitatively degraded food supply
            characterized by diminished nutrition and loss of important trace
            minerals, but we will literally no longer have enough arable topsoil
            to feed ourselves. Without protecting and regenerating the soil on
            our 4 billion acres of cultivated farmland, 8 billion acres of
            pastureland, and 10 billion acres of forest land, it will be
            impossible to feed the world, keep global warming below 2 degrees
            Celsius, or halt the loss of biodiversity.
            <br />
            <br />
            We support all agriculture and are proud to be a part of the farmers
            and ranchers who provide food for our nation, as we continue to grow
            in this practice of organic farming and ranching. We believe this
            practice is not only better for you, but also for the land. From
            beginning to finish, we raise our crops and cattle, on our ranch in
            North-East Wyoming.
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
        </div>
        <Footer setRoute={setRoute} />
      </div>
    </div>
  );
};
