import React from "react";
import { BigMenu } from "./BigMenu";
import apiBG from "../assets/bigMenu/liveBG.jpg";

export const Home = ({ setRoute, route }) => {
  return (
    <div className="noscroll">
        <img src={apiBG} className="bgImg" />
        <div className="component tc">
          <BigMenu setRoute={setRoute} route={route} />
        </div>
    </div>
  );
};
