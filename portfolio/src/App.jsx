import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Error from "./pages/error";

// import "./styles/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<Error />} />
        <Route path="/à-propos" element={<About />} errorElement={<Error />} />
        <Route path="/portfolio" element={<Portfolio />} errorElement={<Error />} />
        <Route path="/contact" element={<Contact />} errorElement={<Error />} />
        <Route path="*" element={<Error />} errorElement={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
