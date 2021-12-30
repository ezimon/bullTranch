import React, { useState, useEffect } from "react";
import { BigMenu } from "./BigMenu";
import { BigMenu2 } from "./BigMenu2";
import { BigMenuSmall } from "./BigMenuSmall";

export const Home = ({ setRoute, route, display }) => {
  return (
    <div>
      {display === "desktop" || display === "Htablet" ? (
        <BigMenu2 setRoute={setRoute} route={route} display={display} />
      ) : (
        <BigMenuSmall setRoute={setRoute} route={route} display={display} />
      )}
    </div>
  );
};
