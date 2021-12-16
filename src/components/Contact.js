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
    <div className="component tc">
      <div className="form">
        <form
          action="https://formsubmit.co/bulltranch@whyw8t.com"
          method="POST"
        >
          <input type="hidden" name="_next" value="http://localhost:3000/" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <label>Name</label>
          <br />
          <input type="text" name="user_name" />
          <br />
          <label>Email</label>
          <br />
          <input type="email" name="email" placeholder="Email Address" />
          <br />
          <label>Message</label>
          <br />
          <textarea name="message" />
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
