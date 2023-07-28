import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
// IMPORT COMPONENTS
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Navigation } from "./layouts/Navigation";
import { Product } from "./pages/product/Product";
import { Contact } from "./pages/contact/Contact";
import { Footer } from "./layouts/Footer";
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
import pinkPant from './assets/images/pink-pant.jpg';
import shirtBack from './assets/images/bg-shirt.jpg';
import jeanJacket from './assets/images/jean-jacket.jpg';
import blueJeanPant from './assets/images/blue-jean.jpg';
import leaderJacket from './assets/images/leader-jacket.jpg';


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

  const glass = new Item('Black Glasses', '23', blackGlasses, 'accessoire', 'New');
  const blackBasket = new Item('Black Basket', '23', basket, 'men', 'Old');
  const hand_watch = new Item('Watch', '23', watch, 'accessoire', 'Sale');
  const jean_shirt = new Item('Jean Shirt', '23', shirt, 'women', 'Sale');
  const black_shirt = new Item('Soft Balck Shirt', '23', blackShirt, 'men', 'New');
  const white_basket = new Item('White Basket', '23', whiteBasket, 'women', 'New');
  const class_shirt = new Item('Class shirt', '23', classShirt, 'men', 'Sale');
  const brown_watch = new Item('Brown Watch', '23', brownWatch, 'accessoire', 'Old');
  const white_shirt = new Item('Soft White Shirt', '23', whiteShirt, 'men', 'New');
  const women_jean = new Item('Jean Pant', '23', womenJean, 'women', 'Old');
  const soft_pant = new Item('Soft Pant', '23', softPant, 'men', 'Sale');
  const pink_pant = new Item('Soft Pink Pant', '23', pinkPant, 'women', 'Best Seller');
  const shirt_back = new Item('Soft White Shirt', '23', shirtBack, 'men', 'Best Seller');
  const jean_jacket = new Item('Jean Jacket', '23', jeanJacket, 'men', 'Best Seller');
  const blue_pant = new Item('Blue Jean', '23', blueJeanPant, 'women', 'Best Seller');
  const leader_jacket = new Item('Leader Jacket', '23', leaderJacket, 'men', 'Old');

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
      soft_pant,
      pink_pant,
      shirt_back,
      jean_jacket,
      blue_pant,
      leader_jacket
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
      <Footer />
    </Context.Provider>
    </>
  );
};
