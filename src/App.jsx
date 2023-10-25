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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
import ReviewCarousel from '../src/components/ReviewCarousel'
import { useState, useEffect } from 'react'
import About from './Pages/About'
import Pricing from './Pages/Pricing'
import GetStarted from './Pages/GetStarted'
import Faq from './Pages/Faq'


function App() {
 
  return (
<Router>
<ComplexNavbar/>
   
      <Routes>

      <Route path="/" element={<div className='bg-white'>
    <Hero/>
    <Features/>
    <CardHolder/>
    <Video/>
    <LanguageSlider/>
    <Categories/>
    <Testimonials/>
    <Popularity/>
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
    </Router>

  )
}

export default App
