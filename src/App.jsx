import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './Pages/Home'
import About from './Pages/About'
import Vision from './Pages/Vision'
import Impact from './components/impact'
import Program from './Pages/Program'
import Backgrounds from './components/Background'
import ParticlesBackground from './components/ParticleBackground'
import Comperhensive from './Pages/Comperhensive'
import Video from './Pages/Video'
import FutureProgram from './Pages/FutureProgram'
import Testimonial from './Pages/Testmonial'
import AboutOrg from './Pages/About-Org'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
// bg-[#f1f8ff]
const App = () => {
  return (
    <div className='min-h-screen '>
        <Navigation />
        <Home />
        <AboutOrg />
        {/* <Impact /> */}
        <Program />
        <Vision />
        <FutureProgram />
        <Comperhensive />
        <Video />
        <Testimonial/>
        <About />
        <Contact />
        <Footer />
        {/* <Backgrounds /> */}
    </div>
  )
}

export default App