import React from "react";
import pic1 from "../assets/bigMenu/pic1.png";
import pic2 from "../assets/bigMenu/pic2.png";
import pic3 from "../assets/bigMenu/pic3.png";
import pic4 from "../assets/bigMenu/pic4.png";
// import mainlogo from "../assets/logo.png";

export const BigMenu = ({ setRoute }) => {
  return (
    <div>
      {/* <img src={mainlogo} alt="Bull T Ranch" className="menuLogo" /> */}
      <div className="menu">
        <button onClick={() => setRoute("apiculture")}>apiculture</button>
        <button onClick={() => setRoute("hydroponic")}>hydroponic</button>
        <button onClick={() => setRoute("agriculture")}>agriculture</button>
        <button onClick={() => setRoute("livestock")}>livestock</button>
      </div>
    </div>
  );
};

{
  /* <div className="menuImg">
<img src={pic1} alt="" />
<h1 className="menuTitle">Hydroponic System</h1>
</div>
<div className="menuImg">
<img src={pic2} alt="" />
<h1 className="menuTitle">Regenerative Agriculture</h1>
</div>
<div className="menuImg">
<img src={pic3} alt="" />
<h1 className="menuTitle">Apiculture</h1>
</div>
<div className="menuImg">
<img src={pic4} alt="" />
<h1 className="menuTitle">Original livestock</h1>
</div> */
}
