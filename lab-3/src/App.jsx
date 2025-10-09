import "./App.css";
import colors from "./data/data";
import ColorBoxesContainer from "./Components/ColorBoxesContainer";

//Gaurav
//Lab-3

function App() {
  return (
    <div>
      <h1>Lab 3 - Color Grid</h1>
      <ColorBoxesContainer colors={colors} />
    </div>
  );
}

export default App;
