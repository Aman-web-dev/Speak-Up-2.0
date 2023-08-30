import './App.css'
import Carousel2 from './components/Carousel2'
import Navbar from './components/Navbar'
import './index.css'
import CardHolder from './Pages/CardHolder'
import PricingPage from './Pages/PricingPage'
import Footer from './components/Footer'
import Hero from './Pages/Hero'
import { ComplexNavbar } from './components/ComplexNavbar'
import Testimonials from './Pages/Testimonials'
import Features from './Pages/Features'
import Free from './Pages/Free' 
import Facts from './Pages/Facts'
import Popularity from './Pages/Popularity'
import Info from './Pages/Info'
import Carosel from './Pages/Carousel'
import LanguageSlider from './Pages/LanguageSlider'
import Categories from './Pages/Categories'
import Video from './Pages/videos'
import Player from './Pages/Player'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  return (
<BrowserRouter>
<ComplexNavbar/>
   
      <Routes>

      <Route path="/" element={<div className='bg-white'>
    <Hero/>
    <Features/>
    <CardHolder/>
    <PricingPage/>
    <Video/>
    {/* <Carosel/> */}
    <LanguageSlider/>
    <Categories/>
    <Facts/>
    <Testimonials/>
    <Popularity/>
    <Free/>
    <Info/>
    </div>}/>
          <Route path="/player" element={<Player />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
