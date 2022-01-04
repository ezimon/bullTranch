import React from "react";
import liveBG from "../../assets/bigMenu/liveBGsmall2.jpg";
import { FooterSmall } from "../FooterSmall";

export const LivestockSmall = ({ display, setRoute }) => {
  return (
    <div>
      <div id="backgroundSmall">
        <img src={liveBG} alt="" className="bgImgHome" />
      </div>
      <br />
      <div className="aboutWidth fadeBG legible">
        <h1 className="spTitle conTitle">Organic Livestock:</h1>
        <div className="spBodyTxt">
          <div className="subP">
            <h2>What is Organic Livestock</h2>
            <h4>To Conserve and Rehabilitate the Land as it is Farmed.</h4>
          </div>
          <p>
            Organic livestock are managed differently than conventional
            livestock. With an emphasis on pasture and restrictions on the use
            of antibiotics and hormones, organic livestock benefit people and
            the environment. Animals raised organically have a better quality of
            life than their conventional counterparts, too.
          </p>
          <br />
          <div className="subP">
            <h2>Benefits of Organic Livestock</h2>
          </div>
          <p>
            <ul>
              <li>
                The nutritional quality of pasture-based products like eggs and
                milk is higher, containing more omega-3s and fatty acids.
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
                Grazing livestock can make use of marginal land not suitable for
                growing crops.
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
                Farmers have more flexibility when they raise animals. They can
                choose to sell their crops directly or feed them to the animals
                as market conditions and other factors shift.
              </li>
              <br />
              <li>
                Of all farming practices, pasture-based livestock operations
                have the most potential to sequester carbon.
              </li>
            </ul>
          </p>
          <br />
        </div>
      </div>
      <FooterSmall setRoute={setRoute} />
    </div>
  );
};
