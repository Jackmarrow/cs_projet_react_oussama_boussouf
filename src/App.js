import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Navigation } from "./layouts/Navigation";
import { Product } from "./pages/product/Product";
import { Contact } from "./pages/contact/Contact";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.scss';


export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
};
