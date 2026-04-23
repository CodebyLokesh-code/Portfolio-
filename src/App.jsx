import { div } from "framer-motion/client"
import NavBar from "./components/NavBar";
import Home from "./section/Home"
import Skils from "./section/Skils"
import Projects from "./section/Projects"
import Experience from "./section/Experience"
import Testimonials from "./section/Testimonials"
import Contact from "./section/Contact"
import Footer from "./section/Footer"
// import ParticlesBackground from "./components/ParticlesBackground"
import CostomCursor from "./components/CostomCursor"
import { useState } from "react"
import React from "react"
import IntroAnimation from "./components/IntroAnimation"

function App() {
  const [introDone, setIntroDone] = useState(false);
  return(
    <>
    {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)}/> }
      {introDone && (
    <div className="relative gradient text-white">
      <CostomCursor/>
      {/* <ParticlesBackground/> */}
      <NavBar/>
      <Home/>
      <Skils/>
      <Projects/>
      <Experience/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
    )}
    </>
  )
}

export default App

