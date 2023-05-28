import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Error from "./pages/error";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";

import "./styles/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} errorElement={<Error />} />
        <Route path="/à-propos" element={<About />} errorElement={<Error />} />
        <Route path="/portfolio" element={<Portfolio />} errorElement={<Error />} />
        <Route path="/contact" element={<Contact />} errorElement={<Error />} />
        <Route path="*" element={<Error />} errorElement={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
