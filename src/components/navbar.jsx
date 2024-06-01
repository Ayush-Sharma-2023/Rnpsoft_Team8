import style from "./navbar.module.css"
import React, { useRef } from 'react';
import "./navbar.css"
function Navbar({onHomeClick, onAiClick, onFeaClick, onDemoClick, onContactClick,homeRef, whyAIRef, demoRef, featuresRef }){ // { onContactClick } remove if 

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      };

    return(<>
    <div className={style.navbar}>
        <div className={style.rnp_logo}></div>
        <div className={style.contact_info}>
            {/* <div className={style.contact_info_content} onClick={() => scrollToSection(homeRef)}><p><a href="#Home">Home</a></p></div>
            <div className={style.contact_info_content} onClick={() => scrollToSection(whyAIRef)}><p><a href="#whyAI">WhyAI</a></p></div>
            <div className={style.contact_info_content} onClick={() => scrollToSection(demoRef)}><p><a href="#Demo">Demo</a></p></div>            
            <div className={style.contact_info_content} onClick={() => scrollToSection(featuresRef)}><p><a href="#Features">Features</a></p></div> */}

            <div className={`${style.contact_info_content} home`} onClick={onHomeClick}><p>Home</p></div>
            <div className={`${style.contact_info_content} whyAI`} onClick={onAiClick}><p>WhyAI</p></div>            
            <div className={`${style.contact_info_content} demo`} onClick={onDemoClick}><p>Demo</p></div>            
            <div className={`${style.contact_info_content} fea`} onClick={onFeaClick}><p>Features</p></div>




            <button className={style.contact_info_button} onClick={onContactClick} >Contact us</button> 

            {/* <div className={style.contact_info_content}><p>Our Teams</p></div> */}
            {/* onClick={onContactClick} */}
        </div>
    </div>
    </>)
}

export default Navbar;