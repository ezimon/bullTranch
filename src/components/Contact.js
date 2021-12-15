import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Button from "@mui/material/Button";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4sx5jxi",
        "template_o29d7pf",
        form.current,
        "bulltranch@whyw8t.com"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="component tc">
      <Button variant="contained">Hello World</Button>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <br />
        <input type="text" name="user_name" />
        <br />
        <label>Email</label>
        <br />
        <input type="email" name="user_email" />
        <br />
        <label>Message</label>
        <br />
        <textarea name="message" />
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
