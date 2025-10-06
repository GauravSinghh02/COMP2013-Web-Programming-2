import "./App.css";
import Card from "./components/ResortCard";
import img1 from "./assets/images/1.jpg";
import img2 from "./assets/images/2.jpg";
import img3 from "./assets/images/3.jpg";
import img4 from "./assets/images/4.jpg";
import img5 from "./assets/images/5.jpg";
import img6 from "./assets/images/6.jpg";

function App() {
  return (
    <>
      <h1>Resorts Lite</h1>
      <div className="divider" />
      <div className="main-container">
        <Card
          image={img1}
          country="Indonesia"
          name="Gili Air Hotel"
          ratings={4.8}
          price="$589/night"
        />
        <Card
          image={img2}
          country="Seychelles"
          name="Hilton Resort"
          ratings={4.2}
          price="$629/night"
        />
        <Card
          image={img3}
          country="US Virgin Islands"
          name="Goa Resort"
          ratings={3.5}
          price="$485/night"
        />
        <Card
          image={img4}
          country="Bahamas"
          name="Kuredu Resort"
          ratings={4.1}
          price="$729/night"
        />
        <Card
          image={img5}
          country="Mauritius"
          name="Trou d'eau Douce"
          ratings={4.9}
          price="$877/night"
        />
        <Card
          image={img6}
          country="Bermuda"
          name="Staniel Cay Hotel"
          ratings={3.2}
          price="$365/night"
        />
      </div>
    </>
  );
}

export default App;
