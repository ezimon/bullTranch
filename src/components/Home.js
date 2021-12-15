import React from "react";
import { BigMenu } from "./BigMenu";

export const Home = ({ setRoute }) => {
  return (
    <div className="component tc">
      <p>home</p>
      <BigMenu setRoute={setRoute} />
    </div>
  );
};
