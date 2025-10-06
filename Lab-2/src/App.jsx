import './App.css'
import ResortCard from './components/ResortCard'
import img1 from './assets/images/1.jpg'
import img2 from './assets/images/2.jpg'
import img3 from './assets/images/3.jpg'
import img4 from './assets/images/4.jpg'
import img5 from './assets/images/5.jpg'
import img6 from './assets/images/6.jpg'

function App() {
  return (
    <>
      <h1>Resorts Lite</h1>
      <div className="main-container">
        <ResortCard image={img1} country="Indonesia" hotel="Gili Air Hotel" rating={4.8} price={589} />
        <ResortCard image={img2} country="Seychelles" hotel="Hilton Resort" rating={4.2} price={629} />
        <ResortCard image={img3} country="US Virgin Islands" hotel="Goa Resort" rating={3.5} price={485} />
        <ResortCard image={img4} country="Bahamas" hotel="Kuredu Resort" rating={4.1} price={729} />
        <ResortCard image={img5} country="Mauritius" hotel="Trou d'eau Douce" rating={4.9} price={877} />
        <ResortCard image={img6} country="Bermuda" hotel="Staniel Cay Hotel" rating={3.2} price={365} />
      </div>
    </>
  )
}

export default App