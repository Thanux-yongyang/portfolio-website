import React from 'react'
import { LuAward } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { RiFolderOpenLine } from "react-icons/ri";
import './about.css'
import ME from '../../assets/Itoshima.jpg'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About img" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
            <LuAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ works experience</small>
            </article>
          
            <article className="about_card">
            <RiFolderOpenLine  className='about_icon'/>
              <h5>Clients</h5>
              <small>300+ cleints wordwide</small>
            </article>
          
            <article className="about_card">
            <LuAward className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
           voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About