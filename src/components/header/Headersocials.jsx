import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Headersocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://likedin.com" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com" target='_blank'><FaSquareGithub /></a>
        <a href="https://facebook.com" target='_blank'><FaSquareFacebook /></a>
        <a href="https://instagram.com" target='_blank'><FaInstagramSquare /></a>
    </div>
  )
}

export default Headersocials