import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Budget from "./components/sections/Budget";
import Products from "./components/sections/Products";
import FAQ from "./components/sections/FAQ";
import ScrollToTopButton from "./components/sections/ScrollToTopButton";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <section className="mt-12 md:mt-18 lg:mt-0">
          <Hero />
        </section>

        <section className="md:pt-24 lg:pt-24" id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="products">
          <Products />
        </section>

        <section id="budget" className="pt-24">
          <Budget />
        </section>
        <FAQ />
        <ScrollToTopButton />
      </main>
    </>
  );
}

export default App;
