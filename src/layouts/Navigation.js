import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png.webp';
import './Navigation.scss';
import {AiOutlineHeart, AiOutlineShopping} from 'react-icons/ai';
import {FiMenu} from 'react-icons/fi';

export const Navigation = () => {
    
    return (
        <nav className="nav-bar px-2 pb-2">
            <img src={logo} alt="logo" />
            <ul className="d-flex flex-column d-md-block">
            <NavLink className="m-1"  to={"/"}>Home</NavLink>
            <NavLink className="m-1"  to={"/product"}>Product</NavLink>
            <NavLink className="m-1"  to={"/about"}>About</NavLink>
            <NavLink className="m-1"  to={"/contact"}>Contact</NavLink>
            </ul>
            <div className="d-flex align-items-center">
                <button className="border-0 bg-transparent"> <AiOutlineHeart style={{height: '1.5rem', width: '1.5rem'}}/></button>
                <span className="linedividel mx-2 d-none d-md-block"></span>
                <button className="border-0 bg-transparent"> <AiOutlineShopping style={{height: '2rem', width: '2rem', color: 'gray'}}/> </button>
                <button className="border-0 bg-transparent d-md-none"> <FiMenu style={{fontSize: '1.8rem'}} /></button>
            </div>
        </nav>
    )
}
