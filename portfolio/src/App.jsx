import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar /> {/* Render the Navbar outside of the Routes */}
          <Routes>
            <Route path="/home" element={<Home />} />
            {/* Correct path to Home */}
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
