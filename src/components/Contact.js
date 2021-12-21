import React, { useRef } from "react";
import { Footer } from "./Footer";
// import toast, { Toaster } from "react-hot-toast";

export const Contact = () => {
  // const notiify = toast.success(
  //   `Mail sent succesfully, we'll contact you soon`
  // );
  return (
      <div className="component">
        <div className="form">
          <h1 className="conTitle tc">Contact form</h1>
          <form
            action="https://formsubmit.co/bulltranch@whyw8t.com"
            method="POST"
          >
            <input type="hidden" name="_next" value="null" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <br />
            <div className="flex-container">
              <div>
                <label className="topTag">Name</label>
                <br />
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="grow"
                />
                <br />
                <br />
                <label className="topTag">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="grow"
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
                <textarea name="message" className="mailText" />
                <br />
                <br />
                {/* <div onClick={() => notiify()}> */}
                <input
                  type="submit"
                  value="Send mail"
                  className="submitBtn grow"
                />
                {/* </div> */}
              </div>
            </div>
          </form>
        </div>
      </div>
  );
};
