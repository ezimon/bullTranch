import React from "react";
import { BigMenu } from "./BigMenu";

export const Home = ({ setRoute }) => {
  return (
    <div className="noscroll">
      <div className="component tc">
        <p>home</p>
        <BigMenu setRoute={setRoute} />
      </div>
    </div>
  );
};
