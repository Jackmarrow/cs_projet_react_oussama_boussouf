import "./Footer.scss";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoPinterestAlt,
  BiLogoSnapchat,
  BiLogoYoutube,
} from "react-icons/bi";
import paypal from "../assets/images/purchase-method/paypal.png";
import visa from "../assets/images/purchase-method/visa.png";
import masterCard from "../assets/images/purchase-method/mastercard.png";
import express from "../assets/images/purchase-method/express.png";
import discover from "../assets/images/purchase-method/discover.png";

export const Footer = () => {
  return (
    <footer className="footer-section py-5 bg-body-tertiary">
      <div className="d-flex justify-content-center mb-7">
        <div className="wrapper d-flex justify-content-between">
          <div className="text-center get-in-touch">
            <h6 className="fw-bold mb-2">GET IN TOUCH</h6>
            <p className="mb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga modi
              est voluptatibus! Repellat, a maiores.
            </p>
            <div>
              <BiLogoFacebook
                style={{ fontSize: "1.2rem" }}
                className="mx-11"
              />
              <BiLogoInstagram
                style={{ fontSize: "1.2rem" }}
                className="mx-11"
              />
              <BiLogoPinterestAlt
                style={{ fontSize: "1.2rem" }}
                className="mx-11"
              />
              <BiLogoSnapchat
                style={{ fontSize: "1.2rem" }}
                className="mx-11"
              />
              <BiLogoYoutube style={{ fontSize: "1.2rem" }} className="mx-11" />
            </div>
          </div>
          <div className="text-center links">
            <h6 className="fw-bold mb-2">LINKS</h6>
            <p className="mb-1">Search</p>
            <p className="mb-1">About Us</p>
            <p className="mb-1">Contact Us</p>
            <p>Returns</p>
          </div>
          <div className="text-center links">
            <h6 className="fw-bold mb-2">LINKS</h6>
            <p className="mb-1">Search</p>
            <p className="mb-1">About Us</p>
            <p className="mb-1">Contact Us</p>
            <p>Returns</p>
          </div>
        </div>
      </div>
      {/* --------------------------------- */}
      <div className="d-flex justify-content-center gap-11 mb-2">
        <a className="nav-link" href="">
          <img src={paypal} alt="" />
        </a>
        <a className="nav-link" href="">
          <img src={visa} alt="" />
        </a>
        <a className="nav-link" href="">
          <img src={masterCard} alt="" />
        </a>
        <a className="nav-link" href="">
          <img src={express} alt="" />
        </a>
        <a className="nav-link" href="">
          <img src={discover} alt="" />
        </a>
      </div>
      {/* --------------------------------- */}
      <p className="text-center">Copyright &copy; All rights reserved</p>
    </footer>
  );
};
