import { useState } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="mt-12 md:mt-18 lg:mt-0">
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
