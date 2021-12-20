import React, { useRef } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm(
  //       "service_4sx5jxi",
  //       "template_o29d7pf",
  //       form.current,
  //       "user_i39th1Qwjn4qvUwM8OBYB"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <div className="component">
      <div className="form">
        <h1 className="conTitle tc">Contact form</h1>
        <form
          action="https://formsubmit.co/bulltranch@whyw8t.com"
          method="POST"
        >
          <input type="hidden" name="_next" value="http://localhost:3000/" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <div className="flex-container">
            <div>
              <label className="topTag">Name</label>
              <br />
              <input type="text" name="user_name" placeholder="Name" />
              <br />
              <br />
              <label className="topTag">Email</label>
              <br />
              <input type="email" name="email" placeholder="Email address" />
              <br />
              <br />
            </div>
            <div style={{marginLeft: '1em', width: '100%'}}>
              <label className="topTag">Message</label>
              <br />
              <textarea name="message" className="mailText" />
              <br />
              <br />
              <input type="submit" value="Send" className="submitBtn" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
