import React from "react";
import liveBG from "../assets/bigMenu/liveBG.jpg";
import { Footer } from "./Footer";

export const About = () => {
  return (
    <div>
      <div className="shadowImg">
        <img alt="" src={liveBG} className="bgImg" />
        <div className="tc iguess">
          <h1 className="subtitle">About us:</h1>
          <div className="width-70">
            <p className="paragraph subP">
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
              leo at erat porta aliquet. Vestibulum volutpat ullamcorper
              egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              In ut aliquam ex. Phasellus ac mollis neque. Ut eget augue
              blandit, porttitor tellus vel, commodo justo. Nullam ultrices
              sollicitudin magna aliquet suscipit. Donec iaculis felis quis
              condimentum euismod. Maecenas a ligula quis ligula ultrices
              rhoncus. Donec nec sem nec est maximus rhoncus. Integer et luctus
              elit. Nam et mauris libero. Mauris imperdiet, dui et faucibus
              malesuada, nulla dui vehicula justo, eu sodales justo tortor at
              justo. Nulla facilisi. Duis eget mauris id ex molestie egestas
              vitae a lacus. Vivamus ornare magna ut venenatis tempus.
              Suspendisse condimentum sem nisi, in hendrerit risus viverra ac.
              Phasellus luctus nisi massa, quis ullamcorper neque viverra at.
              Morbi tellus orci, tristique at massa a, vestibulum tempor tellus.
              Duis vitae posuere ex, a molestie velit. Maecenas quis ullamcorper
              nibh. Praesent ante augue, fringilla in elit nec, molestie commodo
              turpis. Aliquam molestie nec orci eu tincidunt. Donec sem mauris,
              rutrum a placerat ac, laoreet ac urna. Sed condimentum lorem eget
              diam ullamcorper, nec efficitur massa finibus. Donec pulvinar
              placerat erat, sit amet aliquet eros accumsan sed. Curabitur
              consectetur, elit nec efficitur blandit, tortor urna sollicitudin
              nisl, sit amet interdum massa diam quis nibh. Sed ipsum nunc,
              sodales a est dictum, ultrices scelerisque sapien. Suspendisse at
              ultrices ipsum, non mattis magna. Fusce purus metus, rutrum ac
              magna ut, ullamcorper dapibus magna. Fusce vehicula, urna sit amet
              placerat imperdiet, nisi dui scelerisque turpis, quis imperdiet
              quam purus et arcu. Praesent feugiat orci vel mattis ultrices.
              Aliquam mollis nunc eget tellus laoreet, vel finibus magna
              elementum. Donec sed iaculis orci, quis gravida enim. Sed
              ultrices, ex eleifend ornare rutrum, turpis tellus egestas nisi,
              eget interdum risus lacus ac diam. Aliquam nec elementum urna. Nam
              ligula nunc, vulputate non metus at, dignissim vestibulum velit.
              Quisque luctus pellentesque est non fringilla
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
