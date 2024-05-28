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




function App() {

  const [showContact, setShowContact] = useState(false);

  // Function to toggle the visibility
  const handleContactClick = () => {
    setShowContact(true);
  };


  return(
    <>
      <Navbar onContactClick={handleContactClick} />
      {showContact ? (
        <Contact />
      ) : (

  <>

  
    {/* <Navbar /> */}
    <Body_1 />
    {/* <Body_2 /> */}
    <Body_3 />
    <Multilingual />
    {/* <Body_4 /> */}
    {/* <Body_5 /> */}
    {/* <Contact /> */}
    <Footer />

    </>
      )}

  </>
  )
}

export default App
