import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_14ccypi', 'template_s9zq3tk', form.current, 'hDKl30DAlMdzKMDFP')
    e.target.reset();
      };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>COntact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
          <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>thanux@gmail.com</h5>
            <a href="mailto:thaneshwar.me46@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
          <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>thanux@gmail.com</h5>
            <a href="https://m.me/shuijetsu" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
          <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>thanux@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone+8108058564386" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='your full name' />
          <input type="email" name='email' placeholder='Your email' />
          <textarea name="message" rows="7" placeholder='Your Message'  required  ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact