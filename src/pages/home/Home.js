import React from "react";
// IMPORT STYLE
import './Home.scss';



import {HeroSection} from './components/HeroSection';
import { ComingProduct } from "../../layouts/ComingProduct";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <ComingProduct />
    </>
  );
};
