import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="" className='footer_logo'>Egator</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://linkedin.com"><FaLinkedinIn /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; THanux yongyang. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer