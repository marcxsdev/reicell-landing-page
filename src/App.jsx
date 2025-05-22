import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import CardService from "./components/common/CardService";
import Services from "./components/sections/Services";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="mt-12 md:mt-18 lg:mt-0">
          <Hero />
        </div>
        <div className="lg:mt-24">
          <About />
        </div>
      </div>

      <Services />
    </>
  );
}

export default App;
