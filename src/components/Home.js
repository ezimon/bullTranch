import React, { useState, useEffect } from "react";
import { BigMenu } from "./BigMenu";
import { BigMenu2 } from "./BigMenu2";
import { BigMenu1 } from "./BigMenu1";

export const Home = ({ setRoute, route, ratio }) => {
  console.log(ratio);
  return (
    <div>
      {ratio < 0.84 ? (
        <BigMenu2 setRoute={setRoute} route={route} ratio={ratio} />
      ) : (
        <BigMenu1 setRoute={setRoute} route={route} ratio={ratio} />
      )}
    </div>
  );
};
