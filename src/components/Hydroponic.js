import React from "react";
import apiBG from "../assets/bigMenu/hydroBG.webp";
import scroll from "../assets/mouse.png";
import { Footer } from "./Footer";
import { SpNav } from "./SpNav";
import { SpNavSmall } from "./SpNavSmall";

export const Hydroponic = ({ setRoute, route, display }) => {
  return (
    <div className="special">
      {display === "desktop" || display === "Htablet" ? (
        <SpNav setRoute={setRoute} route={route} />
      ) : (
        <SpNavSmall setRoute={setRoute} route={route} />
      )}
      <div className="shadowImg">
        <img src={apiBG} className="bgImg" />
        <div className="Cont">
          <h1 className="spTitle tl">Hydroponic System:</h1>
          <p className="paragraph subP">
            We use this unique method of farming that eliminates the use of soil
            entirely as a growing environment. Instead of the use of soil,
            hydroponics relies on supplying nutrition directly to the plants by
            using nutrient-rich water.
          </p>
          <br />
          <img src={scroll} alt="Scroll down" className="mouse" />
        </div>
      </div>
      <div className="spBody">
        <div className="width-70">
          <h1 className="subtitle">What is Hydroponics?</h1>
          <p className="paragraph">
            Hydroponics is simply the growing of plants without soil.{" "}
            <b>Plants don’t need soil</b>, but they do need the vitamins and
            minerals that soil can provide for them.
            <br />
            Plants also need light, water, carbon dioxide and oxygen at the root
            zone. In hydroponics, plants are grown in an inert medium such as
            rocks or coco coir fiber, and they are fed a solution containing a
            perfected mix of primary, secondary and micro-nutrients.
            <br />
            <br />
            Almost <b>any kind of plant can be grown hydroponically</b>,
            including veggies, herbs, fruits and flowers. Hydroponics is widely
            used by farmers and growers throughout California. You might have
            noticed hydroponic tomatoes or ‘living’ lettuce in the refrigerated
            section at your grocery store. You might also have seen hydroponic
            roses and other cut flowers at the florist.
            <br />
            <br />
            <b>Hydroponics provides an advantage over soil</b> growing for
            several reasons.
            <br />
            Plants can be grown year-round since climate conditions can be
            controlled in a greenhouse. Because their roots do not need to reach
            for nutrients, the plants can be grown closer together. The plants
            grown are significantly larger because of so many available
            nutrients and not having to waste time growing extensive root
            systems. This makes the yields bigger. The nutrient solution also
            keeps the same amount of nutrients available all the time, whereas
            soil tends to “wear out” as the nutrients are taken up.
            <br />
            <br />
            The combination of all these things makes hydroponics more
            productive than soil growing. Many farmers in California are
            beginning to switch over to hydroponics for all of these reasons.
            The concern about water use is also a BIG reason hydroponics is
            becoming more popular - it significantly{" "}
            <b>conserves water over the usual growing methods</b>.
          </p>
        </div>
        <br />
        <div className="width-70">
          <h1 className="subtitle">Why Grow with Hydroponics?</h1>
          <p className="paragraph">
            Hydroponic gardening is an easy and environmentally sound way to
            grow a wide variety of healthy plants.
            <br />
            With hydroponics, gardening is possible in areas where it would
            normally be impossible. In poor soil for example, or in rocky areas,
            balconies and rooftops. With the use of artificial lighting it is
            even possible to successfully garden in a spare room or garage.
            <br />
            Hydroponics will produce a much higher yield than growing in soil,
            so if you want to max the production of your garden, hydroponics is
            a great way to do it! Hydroponics is also great because:
            <ul>
              <br />
              <li>
                Plants grow up to 50% faster than in soil because they have easy
                access to food and water
              </li>
              <br />
              <li>
                Hydroponic produce often has many times more nutrition that
                conventionally grown produce
              </li>
              <br />
              <li>
                Hydroponically grown fruit and veggies have increased flavor and
                texture
              </li>
              <br />
              <li>
                Plants start out in a sterile medium, are fast growing and
                resistant to pests and diseases
              </li>
              <br />
              <li>
                Smaller containers can be used because the roots can grow
                without being root bound
              </li>
              <br />
              <li>
                Plants do not need to compete for nutrients, thus more can be
                grown in a smaller area
              </li>
              <br />
              <li>
                The increased control over growing conditions makes it easier to
                provide the best possible environment for plants, leading to
                better quality produce and higher yields
              </li>
            </ul>
            <br />
            <br />
            <br />
          </p>
          <hr />
        </div>
        <Footer setRoute={setRoute} route={route} />
      </div>
    </div>
  );
};
