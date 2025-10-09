import ColorBox from "./ColorBox";

export default function ColorBoxesContainer({ colors }) {
  return (
    <div className="colorboxescontainer">
      {colors.map((color, index) => (
        <ColorBox key={index} colors={colors} />
      ))}
    </div>
  );
}
