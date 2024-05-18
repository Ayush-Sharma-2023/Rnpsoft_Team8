import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/navbar.jsx"
import Body_1 from "./components/body_1.jsx"
import Body_2 from './components/body_2.jsx'
import Body_3 from './components/body_3.jsx'
import Body_4 from './components/body_4.jsx'
import Body_5 from './components/body_5.jsx'
import Footer from './components/footer.jsx'

function App() {
  return(
  <>
    <Navbar />
    <Body_1 />
    <Body_2 />
    <Body_3 />
    <Body_4 />
    <Body_5 />
    <Footer />

  </>
  )
}

export default App
