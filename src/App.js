import React from "react";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import MainNavigation from "./components/layout/MainNavigation/MainNavigation";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";

function App() {
  return (
    <main>
      <MainNavigation />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
