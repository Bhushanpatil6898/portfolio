import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from "react-icons/ai";
import {BsPerson, BsCodeSlash,BsChevronBarContract} from "react-icons/bs";
import {CgFileDocument} from "react-icons/cg";

import logo from '../images/LOGO.png'
import { GrContact, GrContactInfo } from 'react-icons/gr';
const Nav = () => {
    const [navbarblur, setnavbarblur]=useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } 
        else {
            setnavbarblur(false);
        }
    }

    var showMenu= ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");

        ham[0].classList.toggle("showNavbar");
    }

    var hideMenu = ()=>{
        var bar=document.getElementsByClassName("bar");
        var ham=document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    }
    
    window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navbarblur? 'Navbar blur':'Navbar'}> 
 
 <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo '>
    <br></br>
        <img src={logo} alt="Logo" className="LogoImage" />
    </h1>

        <div className='Hamburger' onClick={showMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>

        <ul className='NavbarLinks'>
            <li onClick={hideMenu}><Link to="/"><AiOutlineHome/> Home</Link></li>
            <li onClick={hideMenu}><Link to="/About"><BsPerson/> About</Link></li>
            <li onClick={hideMenu}><Link to="/Project"><BsCodeSlash/> Project</Link></li>
            <li onClick={hideMenu}><Link to="/Resume"><CgFileDocument/> Resume</Link></li>
            {/* <li onClick={hideMenu}><Link to="/Contact"><BsChevronBarContract />Contact</Link></li> */}
            
        </ul>
        
    </nav>
  )
}

export default Nav