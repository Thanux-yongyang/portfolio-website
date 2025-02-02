import React from 'react'
import './navbar.css'
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { RiMessage2Fill } from "react-icons/ri";
import { useState } from 'react';

const Navbar = () => {
  const [activeNav,setActiveNav]=useState('#');
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#'? 'active':''}><IoHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about'? 'active':''}><FaUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience'? 'active':''}><FaBook /></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services'? 'active':''}><RiServiceLine /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact'? 'active':''}><RiMessage2Fill /></a>
    </nav>
  )
}

export default Navbar