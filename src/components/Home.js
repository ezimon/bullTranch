import React from "react";
import { BigMenu } from "./BigMenu";

export const Home = ({ setRoute, route }) => {
  return (
    <div className="noscroll">
      <div className="component tc">
        <p>home</p>
        <BigMenu setRoute={setRoute} route={route} />
      </div>
    </div>
  );
};
