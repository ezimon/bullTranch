import React, { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import ham from "../assets/icons/ham.png";
import "./modal.css";

export const Hamburger = ({ setRoute }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <img src={ham} className="ham" alt="" onClick={() => setOpen(true)} />
      <Modal open={open} onClose={onCloseModal} center>
        <ul className="">
          <b>
            <li className="hammenu" onClick={() => setRoute("contact")}>
              Contact us
            </li>
            <li className="hammenu" onClick={() => setRoute("about")}>
              Who we are
            </li>
            <li className="hammenu" onClick={() => setRoute("home")}>
              Home
            </li>
          </b>
        </ul>
      </Modal>
    </div>
  );
};
