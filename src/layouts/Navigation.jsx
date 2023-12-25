import logo from '../assets/images/logo.png.webp';
import emptyBasket from '../assets/images/empty-basket.svg';
import { NavLink, Link, useLocation} from "react-router-dom";
import {AiOutlineShopping, AiOutlineClose} from 'react-icons/ai';
import {FiMenu} from 'react-icons/fi';
import { BasketPreview } from "./BasketPreview";
import { useEffect, useState} from "react";
import { motion } from 'framer-motion';
import './Navigation.scss';

export const Navigation = ({cart, calcTotalPrice}) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [showBasket, setShowBasket] = useState(false);
    const {pathname} = useLocation();

    useEffect(()=>{
            setIsOpen(false);
            setShowBasket(false);
    },[pathname]);
    
    // const calcTotalPrice = ()=>{
    //     return cart.reduce((accumulator, currentValue) => accumulator + (currentValue.amount * currentValue.price), 0);
    // }  

    const itemsInBasket = ()=>{
        return cart.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
    }

    const displayNav = ()=>{
        setIsOpen(!isOpen);
        setShowBasket(false);
    }

    const showItems = ()=>{
        setShowBasket(!showBasket);
        setIsOpen(false);
    }


    return (
        <nav className="nav-bar shadow px-1 px-sm-0 pb-2">
            <div className="d-flex align-items-center justify-content-between container pt-4">
                <img src={logo} alt="logo" />
            <motion.ul className={isOpen ? 'visibleNav links d-flex flex-column' : 'd-none links mb-0'}>
                <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="m-1"  to={"/"}>Home</NavLink>
                <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="m-1"  to={"/product"}>Product</NavLink>
                <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="m-1"  to={"/about"}>About</NavLink>
                <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="m-1"  to={"/contact"}>Contact</NavLink>
            </motion.ul>
            <div className="d-flex align-items-center">
                <button onClick={showItems} className="border-0 bg-transparent position-relative mx-1 mx-md-0"> 
                    <AiOutlineShopping style={{height: '2rem', width: '2rem', color: 'gray'}}/> 
                    <span className="position-absolute p-11 top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart.length != 0 ? itemsInBasket() : null}
                    </span>
                </button>
                <button onClick={displayNav} className={isOpen ? "d-none" : "border-0 bg-transparent d-md-none"}> <FiMenu style={{fontSize: '1.8rem'}} /></button>
                <button onClick={displayNav} className={isOpen ? "border-0 d-block bg-transparent d-md-none" : "d-none"}> <AiOutlineClose style={{fontSize: '1.8rem'}} /> </button>
            </div>
           {
                showBasket && 
                <div className="basket-preview bg-white px-1 py-2">
                    <div className="items-container">
                        {
                            cart.length !== 0 ? 
                            cart.map((element) => 
                                <BasketPreview amount={element.amount} name={element.name} imageSrc={element.imageSrc} price={element.price}/>
                            )
                            : <div className='d-flex flex-column align-items-center'>
                                <img className='mb-1' width="100" src={emptyBasket} alt="empty basket" />
                                <p className='text-center'>Your basket is empty</p>
                            </div>
                        }
                    </div>
                    <div className="text-center">
                            {cart.length != 0 ? <p className="text-end my-1">Total: ${calcTotalPrice()}</p> : null}
                            <Link to="/panier"><button className="btn bg-black text-white py-11 px-1 rounded-pill border-0">VIEW PANIER</button></Link>
                    </div>
                </div>
           }
            </div>
        </nav>
    )
}
