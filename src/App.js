import React, { useState, useEffect } from "react";
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

function App() {
  const { height, width } = useWindowDimensions();
  const ratio = height / width;
  const [display, setDisplay] = useState("");

  useEffect(() => {
    ratio < 0.63
      ? setDisplay("desktop")
      : ratio > 0.63 && ratio < 0.83
      ? setDisplay("Htablet")
      : ratio > 0.83 && ratio < 1.17
      ? setDisplay("Vtablet")
      : ratio < 1.17
      ? setDisplay("phone")
      : setDisplay("phone");
  }, [ratio]);

  const [route, setRoute] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const home = <Home setRoute={setRoute} route={route} display={display} />;
  const about = <About setRoute={setRoute} display={display} route={route} />;
  const contact = (
    <Contact setRoute={setRoute} display={display} route={route} />
  );

  const apiculture = (
    <Apiculture setRoute={setRoute} route={route} display={display} />
  );
  const agriculture = (
    <Agriculture setRoute={setRoute} route={route} display={display} />
  );
  const hydroponic = (
    <Hydroponic setRoute={setRoute} route={route} display={display} />
  );
  const livestock = (
    <Livestock setRoute={setRoute} route={route} display={display} />
  );

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
      <div className="black"></div>
      <Header setRoute={setRoute} display={display} />
      <p style={{ float: "right", padding: "1rem" }}>display: {display}</p>
      {component}
      {/* <Footer setRoute={setRoute} route={route} /> */}
    </div>
  );
}

export default App;
