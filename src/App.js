import React, { useState } from "react";
import "./App.css";
import "tachyons";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Apiculture } from "./components/Apiculture";
import { Agriculture } from "./components/Agriculture";
import { Hydroponic } from "./components/Hydroponic";
import { Livestock } from "./components/Livestock";

function App() {
  const [route, setRoute] = useState("home");

  const home = <Home setRoute={setRoute} />;
  const about = <About />;
  const contact = <Contact />;

  const apiculture = <Apiculture />;
  const agriculture = <Agriculture />;
  const hydroponic = <Hydroponic />;
  const livestock = <Livestock />;

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
      {/* <Footer /> */}
    </div>
  );
}

export default App;
