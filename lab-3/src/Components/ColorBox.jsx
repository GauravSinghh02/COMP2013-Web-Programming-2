import { useState } from "react";

export default function ColorBox({ colors }) {

  function giveRandomColour(randColour) {

      return Math.floor(Math.random() * randColour);

  }

  const [colourIndex, setColorIndex] = useState(giveRandomColour(colors.length));

  return (

    <div

      className="colorbox"
      style={{ backgroundColor: colors[colourIndex] }}
      onClick={() => setColorIndex(giveRandomColour(colors.length))}
      
    ></div>

  );
}
