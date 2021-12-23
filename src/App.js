import React, { useState } from "react";
import "./App.css";
import "tachyons";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Apiculture } from "./components/Apiculture";
import { Agriculture } from "./components/Agriculture";
import { Hydroponic } from "./components/Hydroponic";
import { Livestock } from "./components/Livestock";

function App() {
  const [route, setRoute] = useState("home");

  const home = <Home setRoute={setRoute} route={route} />;
  const about = <About setRoute={setRoute}/>;
  const contact = <Contact setRoute={setRoute} />;

  const apiculture = <Apiculture setRoute={setRoute} route={route} />;
  const agriculture = <Agriculture setRoute={setRoute} route={route} />;
  const hydroponic = <Hydroponic setRoute={setRoute} route={route} />;
  const livestock = <Livestock setRoute={setRoute} route={route} />;

  let component;
  switch (route) {
    case "home":
      component = home;
      break;
    case "about":
      component = about;
      break;
    case "contact":
      component = contact;
      break;
    case "apiculture":
      component = apiculture;
      break;
    case "hydroponic":
      component = hydroponic;
      break;
    case "agriculture":
      component = agriculture;
      break;
    case "livestock":
      component = livestock;
      break;
    default:
      component = home;
      break;
  }

  return (
    <div className="App">
      <Header setRoute={setRoute} />
      {component}
      {/* <Footer setRoute={setRoute} /> */}
    </div>
  );
}

export default App;
