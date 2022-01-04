import React from "react";
import { Footer } from "./Footer";
import apiBG from "../assets/bigMenu/liveBG.jpg";
import { ContactSmall } from "./ContactSmall";
import { FooterSmall } from "./FooterSmall";

export const Contact = ({ setRoute, route, display }) => {
  return (
    <div>
      {display === "desktop" || display === "Htablet" ? (
        <div>
          <img src={apiBG} className="bgImg" alt="" />
          <div className="form fadein">
            <h1 className="conTitle tc">Contact form</h1>
            <form
              action="https://formsubmit.co/a7deb2d964cab03046b716887d0905bd"
              method="POST"
            >
              <input
                type="hidden"
                name="_next"
                value="https://www.bulltranch.org/"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <br />
              <div className="flex-container">
                <div>
                  <label className="topTag">Name</label>
                  <br />
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    className="box nrs"
                  />
                  <br />
                  <br />
                  <label className="topTag">Email</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="box nrs"
                  />
                  <br />
                  <br />
                </div>
                <div style={{ marginLeft: "1em", width: "100%" }}>
                  <label className="topTag">Message</label>
                  <br />
                  <textarea name="Content" className="box mailText" />
                  <br />
                  <br />
                  <input
                    type="submit"
                    value="Send mail"
                    className="submitBtn grow"
                  />
                </div>
              </div>
            </form>
          </div>
          <Footer
            display={display}
            className="absolute"
            setRoute={setRoute}
            route={route}
          />
        </div>
      ) : (
        <div>
          <ContactSmall />
          <FooterSmall />
        </div>
      )}
    </div>
  );
};
