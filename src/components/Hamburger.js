import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import ham from "../assets/icons/ham.png";
import "./modal.css";

export const Hamburger = ({ setRoute }) => {
  const [open, setOpen] = useState(false);

  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <img
        src={ham}
        className="ham pointer grow"
        alt=""
        onClick={() => setOpen(true)}
      />
      <Modal open={open} onClose={onCloseModal} center>
        <ul onClick={() => setOpen(false)}>
          <b>
            <li
              className="hammenu pointer grow"
              onClick={() => setRoute("home")}
            >
              Home
            </li>{" "}
            <li
              className="hammenus pointer grow"
              onClick={() => setRoute("livestock")}
            >
              Organic Livestock
            </li>{" "}
            <li
              className="hammenus pointer grow"
              onClick={() => setRoute("agriculture")}
            >
              Regenerative Agriculture
            </li>{" "}
            <li
              className="hammenus pointer grow"
              onClick={() => setRoute("apiculture")}
            >
              Apiculture
            </li>{" "}
            <li
              className="hammenus pointer grow"
              onClick={() => setRoute("hydroponic")}
            >
              Hydroponic System
            </li>
            <li
              className="hammenu pointer grow"
              onClick={() => setRoute("about")}
            >
              Who we are
            </li>
            <li
              className="hammenu pointer grow"
              onClick={() => setRoute("contact")}
            >
              Contact us
            </li>
          </b>
        </ul>
      </Modal>
    </div>
  );
};
