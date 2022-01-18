import React from "react";
import liveBG2 from "../assets/bigMenu/liveBGsmall.jpg";

export const ContactSmall = () => {
  return (
    <div className="tc">
    <div id="backgroundSmall">
        <img src={liveBG2} alt="" className="bgImgHome" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <form
        action="https://formsubmit.co/a7deb2d964cab03046b716887d0905bd"
        method="POST"
        className="formsmall conTitle fadein"
      >
        <h1>Contact form:</h1>
        <input type="hidden" name="_next" value="https://www.bulltranch.org/" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <br />
        <div>
          <label className="">Name</label>
          <br />
          <input
            type="text"
            name="Name"
            placeholder="Name"
            className="smallinput box1"
          />
          <br />
          <br />
          <label className="">Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="smallinput box1"
          />
          <br />
          <br />
        </div>
        <div>
          <label className="">Message</label>
          <br />
          <textarea name="Content" className="box1" rows={7} />
          <br />
          <br />
          <input type="submit" value="Send mail" className="btnLearn pointer grow" />
        </div>
      </form>
    </div>
  );
};
