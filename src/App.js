import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
// IMPORT COMPONENTS
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Navigation } from "./layouts/Navigation";
import { Product } from "./pages/product/Product";
import { Contact } from "./pages/contact/Contact";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.scss';
// IMPORT IMAGES
import basket from './assets/images/black-basket.jpg';
import blackGlasses from './assets/images/black-glasses.jpg';
import watch from './assets/images/black-watch.jpg';
import shirt from './assets/images/shirt.jpg';
import blackShirt from './assets/images/black-shirt.jpg';
import whiteBasket from './assets/images/white-basket.jpg';
import classShirt from './assets/images/class-shirt.jpg';
import brownWatch from './assets/images/brown-watch.jpg';
import whiteShirt from './assets/images/white-shirt.jpg';
import womenJean from './assets/images/women-jean.jpg';
import softPant from './assets/images/male-pant.jpg';

export const Context = createContext();

export const App = () => {


  class Item {
    constructor(name, price, imageSrc, type, state) {
      this.name = name;
      this.price = price;
      this.imageSrc = imageSrc;
      this.type = type;
      this.state = state
    }
  }

  const glass = new Item('Black Glasses', '23', blackGlasses, 'accessories', 'New');
  const blackBasket = new Item('Black Basket', '23', basket, 'men', 'Old');
  const hand_watch = new Item('Watch', '23', watch, 'accessories', 'Sale');
  const jean_shirt = new Item('Jean Shirt', '23', shirt, 'women', 'Sale');
  const black_shirt = new Item('Soft Balck Shirt', '23', blackShirt, 'men', 'New');
  const white_basket = new Item('White Basket', '23', whiteBasket, 'women', 'New');
  const class_shirt = new Item('Class shirt', '23', classShirt, 'men', 'Sale');
  const brown_watch = new Item('Brown Watch', '23', brownWatch, 'men', 'Old');
  const white_shirt = new Item('Soft White Shirt', '23', whiteShirt, 'men', 'New');
  const women_jean = new Item('Jean Pant', '23', womenJean, 'women', 'Old');
  const soft_pant = new Item('Soft Pant', '23', softPant, 'men', 'Sale');

  const [tabProduct, setTabProduct] = useState([
    glass,
     blackBasket,
     hand_watch,
     jean_shirt,
      black_shirt,
      white_basket,
      class_shirt,
      brown_watch,
      white_shirt,
      women_jean,
      soft_pant
  ]);

  return (
    <>
    <Context.Provider value={tabProduct}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Context.Provider>
    </>
  );
};
