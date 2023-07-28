import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png.webp';
import './Navigation.scss';
import {AiOutlineHeart, AiOutlineShopping} from 'react-icons/ai';
import {FiMenu} from 'react-icons/fi';

export const Navigation = () => {
    return (
        <nav className="nav-bar px-2 pb-2">
            <img src={logo} alt="logo" />
            <ul className="d-none d-md-block">
            <NavLink className="mx-1"  to={"/"}>Home</NavLink>
            <NavLink className="mx-1"  to={"/product"}>Product</NavLink>
            <NavLink className="mx-1"  to={"/about"}>About</NavLink>
            <NavLink className="mx-1"  to={"/contact"}>Contact</NavLink>
            </ul>
            <div className="d-flex align-items-center">
                <button className="border-0 bg-transparent"> <AiOutlineHeart style={{fontSize: '1.5rem'}}/></button>
                 <button className="border-0 bg-transparent"> <AiOutlineShopping style={{fontSize: '2.5rem'}}/> </button>
            </div>
        </nav>
    )
}
