import React, { useState, useEffect } from "react";
import { BigMenu } from "./BigMenu";
import { BigMenu2 } from "./BigMenu2";

export const Home = ({ setRoute, route }) => {

  return (
    <div>
      <BigMenu2 setRoute={setRoute} route={route} />
    </div>
  );
};
