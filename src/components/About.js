import React from "react";
import liveBG from "../assets/bigMenu/agriBG.png";
import { Footer } from "./Footer";

export const About = ({ setRoute}) => {
  return (
    <div>
        <img alt="" src={liveBG} className="bgImg" />

      <div className="shadowImg">

        <div className="tc iguess">

          <h1 className="subtitle">About us:</h1>

          <div className="width-70">
            <p className="paragraph subP subPP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              semper felis at libero scelerisque eleifend. Fusce suscipit
              fermentum elit, consectetur facilisis lacus semper tempus.
              Phasellus in laoreet odio. Phasellus non blandit dui. Duis
              tristique urna lacus, ut mattis nisi lacinia sit amet. Mauris
              elementum tincidunt enim a pellentesque. Vivamus ut nisi ut risus
              blandit porta ut in risus. Mauris dictum erat vel nulla posuere,
              vel venenatis leo ornare. Vivamus dui urna, maximus ac cursus et,
              dignissim sit amet quam. Aenean vulputate vel lorem porttitor
              vulputate. Proin aliquam leo sit amet magna elementum, quis
              faucibus arcu vehicula. Nam eu nunc ut ex vulputate ullamcorper.
              Aenean finibus ante vitae mauris maximus, vestibulum mollis velit
              luctus. Duis a bibendum neque. Integer vel mi elementum mi rhoncus
              porta quis eu ligula. Donec posuere aliquet felis sed pretium.
              Praesent eget dolor volutpat, consectetur massa sed, vulputate
              urna. Proin non leo eget mauris euismod maximus. Aliquam blandit
              leo at erat porta aliquet. Vestibulum volutpat ullamcorper.
            </p>
          </div>

        </div>

      <Footer setRoute={setRoute} />

      </div>

    </div>
  );
};
