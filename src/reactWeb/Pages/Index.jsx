import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Services from "./Products";
import About from "./About";
import Contact from "./Contact";
import Feature from "./Service";
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from "./NotFound";
import ViewPage from "./ViewPage";
import Cart from "./Cart";
import './style.css';



const Index = () => {
  return (
    <>
     
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/products" element={<Services />} />
          <Route exact path="/service" element={<Feature />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/viewpage/:id" element={<ViewPage />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Index;
