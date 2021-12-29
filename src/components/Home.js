import React, { useState, useEffect } from "react";
import { BigMenu } from "./BigMenu";
import { BigMenu2 } from "./BigMenu2";
import { BigMenu1 } from "./BigMenu1";

export const Home = ({ setRoute, route, display }) => {
  return (
    <div>
      {display === 'Htablet' ? (
        <BigMenu2 setRoute={setRoute} route={route} display={display} />
      ) : (
        <BigMenu1 setRoute={setRoute} route={route} display={display} />
      )}
    </div>
  );
};
