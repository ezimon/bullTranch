import React, { useRef } from "react";
import { Footer } from "./Footer";
import apiBG from "../assets/bigMenu/liveBG.jpg";

{
  /* <input
type="hidden"
name="_next"
value="https://www.bulltranch.org/"
/>
<input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_template" value="table" /> */
}

export const Contact = ({ setRoute, route, display }) => {
  return (
    <div>
      <div>
        {display === "desktop" || display === "Htablet" ? (
          <img src={apiBG} className="bgImg" />
        ) : null}

        <div className="form">
          <h1 className="conTitle tc">Contact form</h1>
          <form
            action="https://formsubmit.co/bulltranch@whyw8t.com"
            method="POST"
          >
            <br />
            <div className="flex-container">
              <div>
                <label className="topTag">Name</label>
                <br />
                <input
                  type="text"
                  name="user_name"
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
              <div
                style={{
                  marginLeft: "1em",
                  width: "100%",
                  position: "relative",
                }}
              >
                <label className="topTag">Message</label>
                <br />
                <textarea name="message" className="box mailText" />
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
      </div>
      <Footer className="absolute" setRoute={setRoute} route={route} />
    </div>
  );
};
