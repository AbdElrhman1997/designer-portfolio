import React from "react";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import MainNavigation from "./components/layout/MainNavigation/MainNavigation";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <main>
      <MainNavigation />
      <Home />
      <About />
      <Portfolio />
    </main>
  );
}

export default App;
