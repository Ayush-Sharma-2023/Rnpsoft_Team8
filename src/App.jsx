import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/navbar.jsx"
import Body_1 from "./components/body_1.jsx"
import Body_2 from './components/body_2.jsx'
import Multilingual from "./components/multilingual.jsx"
import Body_3 from './components/msAiAnchor.jsx'
import Body_4 from './components/body_4.jsx'
import Body_5 from './components/body_5.jsx'
import Footer from './components/footer.jsx'
import Contact from "./components/contactus.jsx"
import React, { useRef } from 'react';




function App() {

  const [showContact, setShowContact] = useState(false);

 
 const handleContactClick = () => {
  setShowContact(true);
};


const handleHomeClick = () => {
  setShowContact(false);
  homeRef.current.scrollIntoView({ behavior: 'smooth' });
};

  const homeRef = useRef(null);
  const whyAIRef = useRef(null);
  const demoRef = useRef(null);
  const featuresRef = useRef(null);

  return(

    <>
    <Navbar 
    onContactClick={handleContactClick}
    onHomeClick={handleHomeClick}

    homeRef={homeRef} 
    whyAIRef={whyAIRef} 
    demoRef={demoRef} 
    featuresRef={featuresRef} 
     />
    {showContact ? (
      <Contact />
    ) : (
  <>
  

<div ref={homeRef} className="section">
        <Body_1 />
      </div>
      {/* <div ref={whyAIRef} className="section">
        <Body_3 />
      </div> */}
      <div ref={demoRef} className="section_3">
        <Body_3 />
      </div>
      <div ref={featuresRef} className="section_4">
        <Multilingual />
      </div>
    

    {/* <Navbar /> */}
    {/* <Body_1 /> */}
    {/* <Body_2 /> */}
    {/* <Body_3 /> */}
    {/* <Multilingual /> */}
    {/* <Body_4 /> */}
    {/* <Body_5 /> */}
    <Footer />

    </>
      )}

  </>
  )
}

export default App