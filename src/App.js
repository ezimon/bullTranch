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
import useWindowDimensions from "./components/ScreenWidth";
import { Header1 } from "./components/Header1";


function App() {
  const { height, width } = useWindowDimensions();
  const ratio = height / width;

  const [route, setRoute] = useState("home");

  const home = <Home setRoute={setRoute} route={route} ratio={ratio} />;
  const about = <About setRoute={setRoute} ratio={ratio} />;
  const contact = <Contact setRoute={setRoute} ratio={ratio} />;

  const apiculture = <Apiculture setRoute={setRoute} route={route} ratio={ratio} />;
  const agriculture = <Agriculture setRoute={setRoute} route={route} ratio={ratio} />;
  const hydroponic = <Hydroponic setRoute={setRoute} route={route} ratio={ratio} />;
  const livestock = <Livestock setRoute={setRoute} route={route} ratio={ratio} />;

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
      {/* {'ratio:'+ratio} */}
      {ratio < .65 ? <Header setRoute={setRoute} ratio={ratio} /> : <Header1 setRoute={setRoute} ratio={ratio} />}
      {component}
      {/* <Footer setRoute={setRoute} /> */}
    </div>
  );
}

export default App;
