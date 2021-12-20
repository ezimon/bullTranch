import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

export const Contact = () => {
  const notiify = toast.success(
    `Mail sent succesfully, we'll contact you soon`
  );
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
<<<<<<< HEAD
            <div style={{marginLeft: '1em', width: '100%'}}>
=======
            <div
              style={{ marginLeft: "1em", width: "100%", position: "relative" }}
            >
>>>>>>> 8e5d7d9b7f2bb8d7ee16db38a0f36c90a668722f
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
