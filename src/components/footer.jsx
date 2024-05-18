// import style from "./footer.module.css"
import './Footer.css';
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";





function Footer()  {
    return(
        <>
         <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>RnPsoft</h2>
          <p>A pioneering tech company driven by innovation, excellence, and a passion for creating cutting-edge solutions</p>
          <p>Email: team@rnpsoft.com</p>
          <p>Phone: +91 9798219701, +91 8637845107</p>
        </div>
        <div className="footer-section links">
          <h3>About Us</h3>
          <ul>
            <li> Home</li><br/>
            <li> Our Team</li><br/>
            <li> Our Services</li><br/>
            <li> Career</li><br/>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <i className="icon "> <FaInstagram  /></i>
            <i className="icon "> <FaWhatsapp  /></i>
            <i className="icon "> < CiLinkedin /></i>
            <i className="icon "> < FaXTwitter /></i>
            <i className="icon "> < FiYoutube /></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2023 RnPsoft, All rights reserved
      </div>
    </footer>
    </>
  );
};

export default Footer;