import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation/MainNavigation";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProjectDetails" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
