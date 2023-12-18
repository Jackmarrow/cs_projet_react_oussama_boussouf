import { NavLink, Link} from "react-router-dom";
import logo from '../assets/images/logo.png.webp';
import './Navigation.scss';
import {AiOutlineHeart, AiOutlineShopping, AiOutlineClose} from 'react-icons/ai';
import {FiMenu} from 'react-icons/fi';
import { useState, useContext} from "react";
import {Context} from "../App";
import { BasketPreview } from "./BasketPreview";
import {motion} from 'framer-motion';

export const Navigation = () => {
    
    const [showNav, setShowNav] = useState(false);
    const [showBasket, setShowBasket] = useState(false);
    const products = useContext(Context);
    const basektProducts = products.productInBasket;
    
    const calcTotalPrice = ()=>{
        let totalPrice = 0;
        basektProducts.forEach(product=> {
            totalPrice += product.price;
        });
        return totalPrice;
    }

    const displayNav = ()=>{
        setShowNav(!showNav);
    }

    const showItems = ()=>{
        setShowBasket(!showBasket);
    }


    return (
        <nav className="nav-bar shadow px-2 pb-2">
            <img src={logo} alt="logo" />
            <motion.ul className={showNav ? 'visibleNav links d-flex flex-column mb-0' : 'd-none links mb-0'}>
                <NavLink onClick={displayNav} data-toggle="collapse" data-target="#navbarCollapse" className="m-1"  to={"/"}>Home</NavLink>
                <NavLink onClick={displayNav} data-toggle="collapse" data-target="#navbarCollapse" className="m-1"  to={"/product"}>Product</NavLink>
                <NavLink onClick={displayNav} data-toggle="collapse" data-target="#navbarCollapse" className="m-1"  to={"/about"}>About</NavLink>
                <NavLink onClick={displayNav} data-toggle="collapse" data-target="#navbarCollapse" className="m-1"  to={"/contact"}>Contact</NavLink>
            </motion.ul>
            <div className="d-flex align-items-center">
                <button className="border-0 bg-transparent"> <AiOutlineHeart style={{height: '1.5rem', width: '1.5rem'}}/></button>
                <span className="linedividel mx-2 d-none d-md-block"></span>
                <button onClick={showItems} className="border-0 bg-transparent mx-1 mx-md-0"> <AiOutlineShopping style={{height: '2rem', width: '2rem', color: 'gray'}}/> </button>
                <button onClick={displayNav} className={showNav ? "d-none" : "border-0 bg-transparent d-md-none"}> <FiMenu style={{fontSize: '1.8rem'}} /></button>
                <button onClick={displayNav} className={showNav ? "border-0 d-block bg-transparent d-md-none" : "d-none"}> <AiOutlineClose style={{fontSize: '1.8rem'}} /> </button>
            </div>
           {
                showBasket && <div className="basket-preview bg-white px-1 py-2">
                <div className="items-container">
                    {
                        basektProducts.map((element) => 
                            <BasketPreview name={element.name} imageSrc={element.imageSrc} price={element.price}/>
                        )
                    }
                </div>
               <div className="text-center">
                    <p className="text-end my-2">Total: ${calcTotalPrice()}</p>
                    <Link to="/panier"><button className="btn bg-black text-white py-11 px-1 rounded-pill border-0">VIEW PANIER</button></Link>
               </div>
            </div>
           }
        </nav>
    )
}
