import style from "./msAiAnchor.module.css";
import React, { useState } from "react";

import kalingaVideo from "../images/kalinga_ai.mp4";
import language from "../images/language.jpg";

function msAiAnchor() {
  const [activeSection, setActiveSection] = useState("section1");
  const [selectedLanguage, setSelectedLanguage] = useState("Hindi");

  const handleClick = () => {
    setActiveSection("section2");
  };

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <>
      {activeSection === "section1" ? (
        /*This section is the default section i.e "MS KALINGA IS MULTILINGUAL"  */
        <div className={style.backgr}>
          <br />
          <br />
          <div className="Texts">
            <div className={style.title}>
              Ms <span>Kalinga</span>
            </div>
            <div className={style.subtitle}>IS MULTILINGUAL</div>
            <br />
            <div className={style.info}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex
            </div>
          </div>
          <div onClick={handleClick} className={style.languagePic}>
            {" "}
            {/* This is the Pic, the language pic, its properties are added using CSS */}
            <p className={style.languageInfo}>
              Press here to hear her in your own language
            </p>
          </div>

          {/* <div className={style.video_container}>
                 <video autoPlay loop muted controls className={style.video}>
                 <source src={kalingaVideo} type="video/mp4" />
                 Your browser does not support the video tag.
                 </video>
                 
                 </div> */}
        </div>
      ) : (
        /* MS KALINGA IS MULTILIGUAL SECTION ENDS */

        <>
          {/* THIS SECTION EXECUTES IF THE PICTURE IS PRESSED i.e THE CHOOSE LANGUAGE PART*/}

          <div className={style.langBox}>
            <div className={style.languageSelect}></div> {/*This is the language pic in the language select section,Its properties are added using CSS */}
            <div className={style.languages}>
              <button onClick={() => handleLanguageClick("English")}>English</button>
              <button onClick={() => handleLanguageClick("Hindi")}>Hindi</button>
              <button onClick={() => handleLanguageClick("Odia")}>Odia</button>
            </div>
            
            {selectedLanguage === "Hindi" && (
              <div className={style.video_container}>
                <p className={style.lang}>MS KALINGA IN HINDI</p>
                <br />
                <br />
                <br />
                <video autoPlay loop muted controls className={style.video}>
                  <source src={kalingaVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {selectedLanguage === "English" && (
              <div className={style.video_container2}>
                <p className={style.lang}>MS KALINGA IN ENGLISH</p>
                <br />
                <br />
                <br />
                <video autoPlay loop muted controls className={style.video}>
                  <source src={kalingaVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {selectedLanguage === "Odia" && (
              <div className={style.video_container3}>
                <p className={style.lang}>MS KALINGA IN ODIA</p>
                <br />
                <br />
                <br />
                <video autoPlay loop muted controls className={style.video}>
                  <source src={kalingaVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default msAiAnchor;
