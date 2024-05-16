import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/navbar.jsx"
import Body_1 from "./components/body_1.jsx"
import Body_2 from './components/body_2.jsx'
import Body_3 from './components/body_3.jsx'

function App() {
  return(<>
    <Navbar />
    <Body_1 />
    <Body_2 />
    <Body_3 />

  </>)
}

export default App
