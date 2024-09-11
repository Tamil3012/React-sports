import React from 'react'
import { NavLink } from 'react-router-dom'
import './../Nav/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import logo from './../images/logo1.png';
import { RiAccountPinCircleFill } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";


const Navbar = () => {

    const [click,setClick] = useState(false);

    function handelClick() {
         setClick(!click); 
    }   

    

  return (
        <div className='main-nav sticky-top'>

            <nav className='navbar container'>

                <div className='nav-container'>
                    
                        <img src={logo} className="logo " />
                    
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item my-auto'>
                        <NavLink exact to="/"  className="nav-links">Home</NavLink>
                    </li>
                    <li className='nav-item my-auto'>
                        <NavLink exact to="/shop"  className="nav-links">Shop</NavLink>
                    </li>
                    <li className='nav-item my-auto'>
                        <NavLink exact to="/contact"  className="nav-links">Contact</NavLink>
                    </li>
                    <li className='nav-item my-auto'>
                        <NavLink exact to="/login"  className="nav-links" id="nav-icon"><RiAccountPinCircleFill/></NavLink>
                    </li>
                    <li className='nav-item my-auto'>
                        <NavLink exact className="nav-links" id="nav-icon"><TiShoppingCart/></NavLink>
                    </li>
                </ul>
                <div className='nav-icon text-white' onClick={handelClick}>
                    <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>
            </nav>

            

        </div>

        

  )
}

export default Navbar