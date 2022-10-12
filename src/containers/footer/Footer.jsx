import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__part1'>
        <h1>Do you want to step in to the future before others</h1>
      </div>

      <div className="footer__part2">
        <button>Request Early Access</button>
      </div>

      <div className="footer__part3">
        <div className="footer__part3-part">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="footer__part3-part">
          <h4>Links</h4>
          <a href="/#">Overons</a>
          <a href="/#">Social Media</a>
          <a href="/#">Counters</a>
          <a href="/#">Contact</a>
        </div>

        <div className="footer__part3-part">
          <h4>Company</h4>
          <a href="/#">Terms &  Conditions</a>
          <a href="/#">Privacy Policy</a>
          <a href="/#">Contact</a>
        </div>

        <div className="footer__part3-part">
          <h4>Get In Touch</h4>
          <a href="/#">Aksemsettin, Adnan Menderes Blv. No:54, 34080 Fatih/Istanbul</a>
          <a href="/#">(+90) 553 500 53 15</a>
          <a href="/#">furkanucgulll@gmail.com</a>
        </div>
      </div>

      <div className='footer__part4'>
        <p>© 2022 GPT-3. All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer