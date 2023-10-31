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
import { Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react'
import TimeTable from './components/TimeTable'
import ReviewCarousel from '../src/components/ReviewCarousel'
import { useState, useEffect } from 'react'
import About from './Pages/About'
import Pricing from './Pages/Pricing'
import GetStarted from './Pages/GetStarted'
import Faq from './Pages/Faq'
import { BrowserRouter as Router } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import Updates from './Pages/Updates'


function App() {

  const [progress, setProgress] = useState(0)
 
  return (

    <>
      <LoadingBar
      // height='6'
        color='#1976D2'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
 <ComplexNavbar setProgress={setProgress}/>
<Router>   
    <Routes>

    <Route path="/" element={<div className='bg-white'>
    <Hero/>
    <Features/>
    {/* <CardHolder/> */}
    <Video/>
    <LanguageSlider/>
    <TimeTable/>
    <Categories/>
    <Testimonials/>
    <Analytics />
    <Popularity/>
    <ReviewCarousel />
    <Free/>
    {/* <Info/> */}
    </div>}/>
          <Route path="/player" element={<Player setProgress={setProgress}/>} />
          <Route path="/about" element={<About setProgress={setProgress}/>} />
          <Route path="/pricing" element={<Pricing setProgress={setProgress}/>} />
          <Route path="/getstarted" element={<GetStarted setProgress={setProgress}/>} />
          <Route path="/faq" element={<Faq setProgress={setProgress}/>} />
          <Route path="/updates" element={<Updates setProgress={setProgress}/>} />

      </Routes>
    </Router>
    <Footer/> 

    </>
  )
}

export default App
