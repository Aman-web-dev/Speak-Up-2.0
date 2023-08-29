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

function App() {

  return (
    <div className='bg-white'>
    <ComplexNavbar/>
         <Hero/>
        <CardHolder/>
        <PricingPage/>
        <Testimonials/>
        <Features/>
        <Free/>
        <Carousel2/>

        <Footer/>
        </div>
  )
}

export default App
