import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Vision from './Pages/Vision';
import Impact from './components/Impact';
import Program from './Pages/Program';
import Backgrounds from './components/Background';
import ParticlesBackground from './components/ParticleBackground';
import Comperhensive from './Pages/Comperhensive';
import Video from './Pages/Video';
import FutureProgram from './Pages/FutureProgram';
import Testimonial from './Pages/Testmonial';
import AboutOrg from './Pages/About-Org';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

const App = () => {
  return (
      <div className='min-h-screen'>
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
        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-org' element={<AboutOrg />} />
          <Route path='/impact' element={<Impact />} />
          <Route path='/program' element={<Program />} />
          <Route path='/vision' element={<Vision />} />
          <Route path='/future-program' element={<FutureProgram />} />
          <Route path='/comperhensive' element={<Comperhensive />} />
          <Route path='/video' element={<Video />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes> */}
        <Footer />
      </div>
  );
};

export default App;
