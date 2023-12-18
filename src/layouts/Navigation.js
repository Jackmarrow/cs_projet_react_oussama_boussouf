import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png.webp';
import './Navigation.scss';
import {AiOutlineHeart, AiOutlineShopping, AiOutlineClose} from 'react-icons/ai';
import {FiMenu} from 'react-icons/fi';
import { useState } from "react";
import {motion} from 'framer-motion';

export const Navigation = ({cart}) => {
    
    const [showNav, setShowNav] = useState(false);

    const displayNav = ()=>{
        setShowNav(!showNav);
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
                <NavLink to={"/cart"}>
                    <button className="border-0 bg-transparent mx-1 mx-md-0 position-relative"> 
                        <AiOutlineShopping style={{height: '2rem', width: '2rem', color: 'gray'}}/> 
                        {
                            cart.length != 0 ? 
                            <div className="bg-danger px-11 py-10 rounded-circle text-white position-absolute top-0 start-50 fs-8">{cart.length}</div>
                            : null
                        }
                    </button>
                </NavLink>
                <button onClick={displayNav} className={showNav ? "d-none" : "border-0 bg-transparent d-md-none"}> <FiMenu style={{fontSize: '1.8rem'}} /></button>
                <button onClick={displayNav} className={showNav ? "border-0 d-block bg-transparent d-md-none" : "d-none"}> <AiOutlineClose style={{fontSize: '1.8rem'}} /> </button>
            </div>
        </nav>
    )
}
