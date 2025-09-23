import './App.css'
import ResortCard from './components/ResortCard'

function App() {
  return (
    <>
      <h1>Resorts Lite</h1>
      <div className="main-container">
        <ResortCard
          image="src/assets/images/1.jpg"
          country="Indonesia"
          hotel="Gili Air Hotel"
          rating={4.8}
          price={589}
        />
        <ResortCard
          image="src/assets/images/2.jpg"
          country="Seychelles"
          hotel="Hilton Resort"
          rating={4.2}
          price={629}
        />
        <ResortCard
          image="src/assets/images/3.jpg"
          country="US Virgin Islands"
          hotel="Goa Resort"
          rating={3.5}
          price={485}
        />
        <ResortCard
          image="src/assets/images/4.jpg"
          country="Bahamas"
          hotel="Kuredu Resort"
          rating={4.1}
          price={729}
        />
        <ResortCard
          image="src/assets/images/5.jpg"
          country="Mauritius"
          hotel="Trou d'eau Douce"
          rating={4.9}
          price={877}
        />
        <ResortCard
          image="src/assets/images/6.jpg"
          country="Bermuda"
          hotel="Staniel Cay Hotel"
          rating={3.2}
          price={365}
        />
      </div>
    </>
  )
}

export default App

