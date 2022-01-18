import React from "react";
import liveBG from "../assets/bigMenu/agriBG.jpg";
import { Footer } from "./Footer";
import { FooterSmall } from "./FooterSmall";
import liveBG2 from "../assets/bigMenu/agriBGsmall.jpg";

export const About = ({ setRoute, route, display }) => {
  return (
    <div>
      {display === "desktop" || display === "Htablet" ? (
        <img alt="" src={liveBG} className="bgImg" />
      ) : 
        <div id="backgroundSmall">
          <img src={liveBG2} alt="" className="bgImgHome legible" />
        </div>
      }
      <div className="tc">
        <br />
        <br />
        <h1 className="conTitle bigger">About us:</h1>
        <div
          className={
            display === "desktop" || display === "Htablet"
              ? "width-70"
              : "aboutWidth"
          }
        >
          <p
            className={
              display === "desktop" || display === "Htablet"
                ? "paragraph subP"
                : "paragraph"
            }
          >
            Nestled in the Black Hills of Wyoming with more than 250 acres of
            land; Bull T Ranch is a hybrid and new business model that is
            focused on our commitment to sustainable agriculture in the
            production of meat, dairy and grains with our goal of not just
            preserving the land but improving the methods of agriculture to
            ensure we will have a tomorrow for the future generations to come.
            <br />
            <br />
            Our hope is that the price Americans pay for food will someday
            reflect the real cost of producing it: the stewardship required to
            make sure that the land will remain fertile and productive, the
            health and benefits necessary to maintain an active labor force, a
            strong rural community, and a profit margin that will provide the
            incentive for people like us to spend every waking moment producing
            food and fiber for the rest.
            <br />
            <br />
            <br />
          </p>
        </div>
        {display === "desktop" || display === "Htablet" ? (
          <Footer
            display={display}
            display={display}
            setRoute={setRoute}
            route={route}
          />
        ) : (
          <FooterSmall />
        )}
      </div>
    </div>
  );
};
