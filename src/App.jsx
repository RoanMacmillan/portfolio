import React, {useEffect, useState} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./assets/Components/Header/Header";
import Work from "./assets/Components/Work/Work";
import Footer from "./assets/Components/Footer/Footer";
import portfolioData from "../portfolioItemsData.json";
import PortfolioDetail from "./assets/Components/PortfolioDetail/PortfolioDetail";
import About from "./assets/Components/About/About";
import Contact from "./assets/Components/Contact/Contact";
import LoadingModal from "./assets/Components/LoadingModal/LoadingModal";
import ScrollToTop from './assets/Components/ScrollToTop/ScrollToTop';
import PageLoadingModal from "./assets/Components/PageLoadingModal/PageLoadingModal";
import useScrollToTopOnRefresh from "./assets/Components/useScrollToTopOnRefresh/useScrollToTopOnRefresh";


const AppContent = () => {




  
  // useScrollToTopOnRefresh();

  return (
    <>
      <Header />
      <PageLoadingModal />
      
      <ScrollToTop />
      {/* <LoadingModal show={showModal} /> */}
      <Routes>
        <Route exact path="/" element={<Work />} />
        {portfolioData.map((item) => (
          <Route
            key={item.id}
            path="/portfolio/:id"
            element={<PortfolioDetail portfolioData={portfolioData} detailHero={item.detailHero} />}
          />
        ))}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {

  
  return (
    <div>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
