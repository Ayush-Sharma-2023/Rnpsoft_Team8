import style from "./msAiAnchor.module.css";
import React, { useState } from 'react';

import kalingaVideo from "../images/kalinga_ai.mp4";
import language from "../images/language.jpg"


function msAiAnchor() {

  const [activeSection, setActiveSection] = useState('section1');

  const handleClick = () => {
    // setActiveSection(prevSection => (prevSection === 'section1' ? 'section2' : 'section1'));
    setActiveSection('section2');
  };


  return (

    <>
          {activeSection == 'section1' ? (
               <div className={style.backgr}>
               <br />
               <br />
               <div className="Texts">
       
               <div className={style.title}>Ms <span>Kalinga</span></div>
               <div className={style.subtitle}>IS MULTILINGUAL</div>
               <br />
               <div className={style.info}>
                 
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
       
                 
               </div>
       
               </div>
               <div onClick={handleClick} className={style.languagePic}>
                 <p className={style.languageInfo} >Press here to hear her in your own language</p>
                 
               {/* <img className={style.language} src={language} alt="" /> */}
               </div>
       
               {/* <br />
               <br /> */}
       
               {/* <div className={style.video_container}>
                 <video autoPlay loop muted controls className={style.video}>
                   <source src={kalingaVideo} type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
                 
               </div> */}
       
               
             </div>

):(
  
    <>
    <div className={style.langBox}>
    
  <div className={style.languageSelect}>

          </div>

               <div className={style.video_container}>
                <p className={style.lang}>MS KALINA IN HINDI</p> <br /><br /><br />
                <video autoPlay loop muted controls className={style.video}>
                  <source src={kalingaVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
              </div> 
            
              </div>


          </>
          )}

    
   
    </>
  );
}

export default msAiAnchor;
