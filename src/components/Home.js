import React from "react";
import { BigMenu2 } from "./BigMenu2";
import { BigMenuSmall2 } from "./BigMenuSmall2";

export const Home = ({ setRoute, route, display }) => {
  return (
    <div>
      {display === "desktop" || display === "Htablet" ? (
        <BigMenu2 setRoute={setRoute} route={route} display={display} />
      ) : (
        <BigMenuSmall2 setRoute={setRoute} route={route} display={display} />
      )}
    </div>
  );
};
