import React from "react";
import apiBG from "../assets/bigMenu/liveBG.jpg";
import scroll from "../assets/mouse.png";
import { Footer } from "./Footer";
import { SpNav } from "./SpNav";

export const Livestock = ({ setRoute, route }) => {
  return (
    <div className="special">
      <SpNav setRoute={setRoute} route={route} />
      <div className="shadowImg">
        <img src={apiBG} className="bgImg" />
        <div className="Cont">
          <h1 className="spTitle tl">Organic Livestock:</h1>
          <p className="paragraph subP">
            We focus on pasture-based, encouraging biodiversity, healthy soil,
            and humane treatment of animals. Our priorities are pasture and
            restrictions on the use of antibiotics and hormones.
          </p>
          <br />
          <img src={scroll} alt="" className="mouse" />
        </div>
      </div>

      <div className="spBody">
        <div className="width-70">
          <h1 className="subtitle">What is Organic Livestock</h1>
          <p className="paragraph">
            Organic livestock are managed differently than conventional
            livestock. With an emphasis on pasture and restrictions on the use
            of antibiotics and hormones, organic livestock benefit people and
            the environment. Animals raised organically have a better quality of
            life than their conventional counterparts, too.
          </p>
        </div>
        <br />
        <div className="width-70">
          <h1 className="subtitle">Benefits of Organic Livestock</h1>
          <p className="paragraph">
            The nutritional quality of pasture-based products like eggs and milk
            is higher, containing more omega-3s and fatty acids.
            <br />
            The soil improves as it's fertilized with manure.
            <br />
            Since antibiotics are not allowed in organic production, the risk of
            antibiotic resistance and “superbugs” is eliminated.
            <br />
            Grazing livestock can make use of marginal land not suitable for
            growing crops.
            <br />
            Animals assist with weed management by eating or trampling unwanted
            plants.
            <br />
            Livestock provide an additional income stream and help distribute a
            farmer’s workload through the year.
            <br />
            Farmers have more flexibility when they raise animals. They can
            choose to sell their crops directly or feed them to the animals as
            market conditions and other factors shift.
            <br />
            Of all farming practices, pasture-based livestock operations have
            the most potential to sequester carbon.
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <Footer setRoute={setRoute} />
      </div>
    </div>
  );
};
