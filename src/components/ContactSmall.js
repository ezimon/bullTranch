import React from "react";

export const ContactSmall = () => {
  return (
    <div className="tc">
      <br />
      <br />
      <br />
      <form
        action="https://formsubmit.co/bulltranch@whyw8t.com"
        method="POST"
        className=" formsmall"
      >
        <h1 className="">Contact form:</h1>
        <input type="hidden" name="_next" value="https://www.bulltranch.org/" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <br />
        <div>
          <label className="">Name</label>
          <br />
          <input type="text" name="user_name" placeholder="Name" className="" />
          <br />
          <br />
          <label className="">Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="middle"
          />
          <br />
          <br />
        </div>
        <div>
          <label className="">Message</label>
          <br />
          <textarea name="message" className="" rows={7} />
          <br />
          <br />
          <input type="submit" value="Send mail" className="" />
        </div>
      </form>
    </div>
  );
};
