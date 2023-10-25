import './App.css'
import './index.css'
import CardHolder from './Pages/CardHolder'
import PricingPage from './Pages/PricingPage'
import Footer from './components/Footer'
import Hero from './Pages/Hero'
import ComplexNavbar from './components/ComplexNavbar'
import Testimonials from './Pages/Testimonials'
import Features from './Pages/Features'
import Free from './Pages/Free' 
import Facts from './Pages/Facts'
import Popularity from './Pages/Popularity'
import Info from './Pages/Info'
import LanguageSlider from './Pages/LanguageSlider'
import Categories from './Pages/Categories'
import Video from './Pages/videos'
import Player from './Pages/Player'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReviewCarousel from '../src/components/ReviewCarousel'
import { useState, useEffect } from 'react'
import About from './Pages/About'
import Pricing from './Pages/Pricing'
import GetStarted from './Pages/GetStarted'
import Faq from './Pages/Faq'


function App() {
  const [width, setWidth] =  useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
<BrowserRouter>
<ComplexNavbar/>
   
      <Routes>

      <Route path="/" element={<div className='bg-white'>
    <Hero/>
    <Features/>
    <CardHolder/>
    {/* {(width > 850) ? <PricingPage/> : ""} */}
    <Video/>
    {/* <Carosel/> */}
    <LanguageSlider/>
    <Categories/>
    <Testimonials/>
    <Popularity/>
    {/* <Free/> */}
    <ReviewCarousel />
    <Info/>
    </div>}/>
          <Route path="/player" element={<Player />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
