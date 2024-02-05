import "./App.css";
import Mynav from "./components/Mynav";
import Hero from "./components/Hero";
import Mision from "./components/Mision";
import Nuestros from "./components/Nuestros";
import Jackport from "./Jackport";
import Casino from "./components/Casino";
import Elegirnos from "./components/Elegirnos";
import Ofertas from "./components/Ofertas";
import Luxury from "./components/Luxury";
import Platinum from "./components/Platinum";
import Ellos from "./components/Ellos";
import Preguntas from "./components/Preguntas";
import Footer from "./components/Footer";
import BackToTop from "./components/Backtotop";
import Priloder from "./components/Priloder";

function App() {
  return (
    <div className="bg-[#00141b]">
      <div className='bg-[url("./assets/image/bg-hero-img.webp")] bg-no-repeat bg-cover bg-center'>
        <Mynav />
        <Hero />
      </div>
      <Mision />
      <Nuestros />
      <div className=' bg-[url("./assets/image/bg-sec-img.png")] bg-no-repeat bg-cover bg-center'>
        <Jackport />
      </div>
      <Casino />
      <Elegirnos />
      <Ofertas />
      <Luxury />
      <Platinum />
      <Ellos />
      <Preguntas />
      <Footer />
      <BackToTop />
      <Priloder />
    </div>
  );
}

export default App;
