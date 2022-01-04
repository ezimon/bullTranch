import React from "react";
import apiBG from "../assets/bigMenu/liveBG.jpg";
import scroll from "../assets/mouse.png";
import { Footer } from "./Footer";
import { SpNav } from "./SpNav";
import { LivestockSmall } from "./smallSPs/LivestockSmall";

export const Livestock = ({ setRoute, route, display }) => {
  return (
    <div>
      {display === "phone" || display === "Vtablet" ? (
        <LivestockSmall setRoute={setRoute} route={route} display={display} />
      ) : (
        <div className="special">
          <SpNav setRoute={setRoute} route={route} />
          <div className="shadowImg">
            <img alt="" src={apiBG} className="bgImg" />
            <div className="Cont">
              <h1 className="spTitle ">Organic Livestock</h1>
              <p className="paragraph subP">
                We focus on pasture-based, encouraging biodiversity, healthy
                soil, and humane treatment of animals. Our priorities are
                pasture and restrictions on the use of antibiotics and hormones.
              </p>
              <br />
              <img src={scroll} alt="" className="mouse" />
            </div>
          </div>
          <div className="spBody">
            <div className="width-70">
              <h1 className="subtitle">
                What is organic livestock management?
              </h1>
              <p className="paragraph">
                Organic livestock are managed differently than conventional
                livestock. With an emphasis on pasture and restrictions on the
                use of antibiotics and hormones, organic livestock benefit
                people and the environment. Animals raised organically have a
                better quality of life than their conventional counterparts,
                too.
              </p>
            </div>
            <br />
            <div className="width-70">
              <h1 className="subtitle">Benefits of Organic Livestock:</h1>
              <p className="paragraph">
                <ul>
                  <li>
                    The nutritional quality of pasture-based products like eggs
                    and milk is higher, containing more omega-3s and fatty
                    acids.
                  </li>
                  <br />
                  <li>The soil improves as it's fertilized with manure.</li>
                  <br />
                  <li>
                    Since antibiotics are not allowed in organic production, the
                    risk of antibiotic resistance and “superbugs” is eliminated.
                  </li>
                  <br />
                  <li>
                    Grazing livestock can make use of marginal land not suitable
                    for growing crops.
                  </li>
                  <br />
                  <li>
                    Animals assist with weed management by eating or trampling
                    unwanted plants.
                  </li>
                  <br />
                  <li>
                    Livestock provide an additional income stream and help
                    distribute a farmer’s workload through the year.
                  </li>
                  <br />
                  <li>
                    Farmers have more flexibility when they raise animals. They
                    can choose to sell their crops directly or feed them to the
                    animals as market conditions and other factors shift.
                  </li>
                  <br />
                  <li>
                    Of all farming practices, pasture-based livestock operations
                    have the most potential to sequester carbon.
                  </li>
                </ul>
                <br />
              </p>
              <h1 className="subtitle">Why does it matter?</h1>
              <p className="paragraph">
                Factory farming is a top contributor to climate change. On
                factory farms, thousands of animals are raised in confinement.
                Forest might be cleared to make space for feedlots, and that
                many animals quickly eliminate any pasture or ground cover,
                exposing soil to wind and water erosion. Manure collects in
                pits, releasing methane and nitrous oxide, potent greenhouse
                gases. <br />
                <br />
                Factory-farmed animals are fed grain to encourage rapid weight
                gain. But cows in particular aren’t built to digest grain,
                leading to increased use of antibiotics and the threat of
                “superbug” outbreaks. Monocultures of corn and soy are required
                to keep up with feed demand, creating further emissions and
                worsening land degradation. Organic livestock management is
                pasture-based, encouraging biodiversity, healthy soil, and
                humane treatment of animals. Animal waste becomes a tool for
                fertility, not a hazard. The animals improve the health of the
                land. Of all farming practices, pasture-based livestock
                operations have the most potential to sequester carbon. too.
              </p>
              <br />
              <hr />
            </div>
            <Footer setRoute={setRoute} route={route} />
          </div>
        </div>
      )}
    </div>
  );
};
