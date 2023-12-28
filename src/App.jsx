import React, { createContext, useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
// IMPORT COMPONENTS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Home } from "./pages/home/Home.jsx";
import { About } from "./pages/about/About.jsx";
import { Navigation } from "./layouts/Navigation.jsx";
import { Product } from "./pages/product/Product.jsx";
import { ProductDetails } from "./pages/productDetails/ProductDetails.jsx";
import {Panier} from "./pages/panier/Panier.jsx";
import { Contact } from "./pages/contact/Contact.jsx";
import { Footer } from "./layouts/Footer.jsx";
// LIST OF ALL PRODUCT
import { tabProduct } from "./constants/constant.js";
import { cartReducer } from "./reducer/cartReducer.js";
//STYLE
import './App.scss';



export const Context = createContext();

export const App = () => {

  // const [cart, setCart] = useState([]);
  const [cart, dispatch] = useReducer(cartReducer, []);
  
  //CALC TOTAL PRICE
  const calcTotalPrice = ()=>{
    return cart.reduce((accumulator, currentValue) => accumulator + (currentValue.amount * currentValue.price), 0);
  } 
  
  //ADD PRODUCT TO BASKET
  const addProduct = (product)=> {
    dispatch({type:"addProduct", product: product});
    // let itExist = false;
    // for (let i = 0; i < cart.length; i++) {
    //   const cartElement = cart[i];
    //   if(cartElement.name === product.name){
    //      setCart( (prevEle) =>{
    //       const updatedProduct = [...prevEle];
    //       if(product.amount === 1){
    //         updatedProduct[i] = {...updatedProduct[i], amount: updatedProduct[i].amount + 1 };
    //       } else{
    //         updatedProduct[i] = {...updatedProduct[i], amount: product.amount };
    //       }
    //       return updatedProduct;
    //      });

    //      itExist = true;
    //   }
    // }

    // if(!itExist){
    //   setCart([...cart, product])
    // }
  };

  return (
    <>
    <Context.Provider value={{tabProduct, cart, addProduct, dispatch, calcTotalPrice}}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/panier" element={<Panier/>} />
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
      <Footer />
    </Context.Provider>
    </>
  );
};
