import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./assets/Components/Header/Header";
import Work from "./assets/Components/Work/Work";
import Footer from "./assets/Components/Footer/Footer";
import portfolioData from "../portfolioItemsData.json";
import PortfolioDetail from "./assets/Components/PortfolioDetail/PortfolioDetail";
import About from "./assets/Components/About/About";
import Contact from "./assets/Components/Contact/Contact";
import ScrollToTop from "./assets/Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Work />} />
            {portfolioData.map((item) => (
              <Route
                key={item.id}
                path="/portfolio/:id"
                element={
                  <PortfolioDetail
                    portfolioData={portfolioData}
                    detailHero={item.detailHero}
                  />
                }
              />
            ))}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
