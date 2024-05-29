import style from "./navbar.module.css"
import React, { useRef } from 'react';

function Navbar({ onContactClick,homeRef, whyAIRef, demoRef, featuresRef }){ // { onContactClick } remove if 

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      };

    return(<>
    <div className={style.navbar}>
        <div className={style.rnp_logo}></div>
        <div className={style.contact_info}>
            <div className={style.contact_info_content} onClick={() => scrollToSection(homeRef)}><p><a href="#Home">Home</a></p></div>
            <div className={style.contact_info_content} onClick={() => scrollToSection(whyAIRef)}><p><a href="#whyAI">WhyAI</a></p></div>
            <div className={style.contact_info_content} onClick={() => scrollToSection(demoRef)}><p><a href="#Demo">Demo</a></p></div>
            
            <div className={style.contact_info_content} onClick={() => scrollToSection(featuresRef)}><p><a href="#Features">Features</a></p></div>
            <button className={style.contact_info_button} onClick={onContactClick} >Contact us</button> 

            {/* <div className={style.contact_info_content}><p>Our Teams</p></div> */}
            {/* onClick={onContactClick} */}
        </div>
        <button className={style.dropDown}><i class="fa-solid fa-bars"></i></button>
    </div>
    </>)
}

export default Navbar;