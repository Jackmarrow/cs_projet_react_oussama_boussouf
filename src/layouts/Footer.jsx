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

export const Footer = () => {
  return (
    <footer className="footer-section py-5 bg-body-tertiary">
      <div className="d-flex justify-content-center mb-4">
        <div className="wrapper d-flex flex-column flex-md-row justify-content-between">
          <div className=" get-in-touch text-center mb-3 mb-md-0">
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
          <div className="links text-center mb-1 mb-md-0">
            <h6 className="fw-bold mb-2">LINKS</h6>
            <a className="mb-1 nav-link d-block" href="#">Search</a>
            <a className="mb-1 nav-link d-block" href="#">About Us</a>
            <a className="mb-1 nav-link d-block" href="#">Contact Us</a>
            <a className="nav-link" href="#">Returns</a>
          </div>
          <div className="links text-center">
            <h6 className="fw-bold mb-2">LINKS</h6>
            <a className="mb-1 nav-link d-block"href="#">Search</a>
            <a className="mb-1 nav-link d-block"href="#">About Us</a>
            <a className="mb-1 nav-link d-block"href="#">Contact Us</a>
            <a className="nav-link" href="#">Returns</a>
          </div>
        </div>
      </div>
      {/* --------------------------------- */}
      <div className="d-flex justify-content-center gap-11 mb-2">
        <a className="nav-link" href="https://www.paypal.com">
          <img src={paypal} alt="" />
        </a>
        <a className="nav-link" href="https://www.visa.com">
          <img src={visa} alt="" />
        </a>
        <a className="nav-link" href="https://www.mastercard.com">
          <img src={masterCard} alt="" />
        </a>
      </div>
      {/* --------------------------------- */}
      <p className="text-center">Copyright &copy; All rights reserved</p>
    </footer>
  );
};
