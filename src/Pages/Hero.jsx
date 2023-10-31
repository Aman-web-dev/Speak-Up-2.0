// import React from 'react';
// import logo from '../../src/assets/speakup.jpg';
import {TypeAnimation} from '../../node_modules/react-type-animation'
// import image from '../assets/homepageimgkid.svg'
// import TimeTable from '../components/TimeTable';
// import sulsImage from '../../public/suls.svg'
// import img from '../../public/Untitled design.svg'
import heroImage from '../../src/assets/heroImage.svg'

function HomePage() {
  <head>
    <title>Speak Up</title>
    <link rel="icon" href="/favicon.ico " />
  </head>
  return (
    <section className='lg:flex min-h-screen h-auto block bg-white'>
      <div className='lg:w-1/2 w-full text-start my-auto text-4xl text-black font-bold px-16'>
        <h1 className='text-7xl uppercase font-roboto-mono'>Speak up</h1>
        <p className='text-normal text-xl font-normal font-poppins my-4'>Unlock a World of Opportunities: Learn Multiple Languages with Us!</p>

        <div>
        
        <TypeAnimation className='text-black w-full'
        sequence={[

          'English "Hello"',
          3000,
          'Portugese  "Olá"',
          3000,
          'Spanish "Hola"',
          3000,
          'French "Bonjour"',
          3000,
          'Korean "안녕하세요"',
          3000,
          'Japanese "こんにちは"',
          3000,
          
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '2rem'}}/>

</div>
            <button className='text-base bg-black px-8 py-2 rounded-full font-normal text-white mt-4'>Get started</button>
    
      </div>
      <div className="lg:w-1/2 w-full flex justify-center items-center">
        <img src={heroImage} alt="Speak up home image" className='h-[80%] w-[80%] object-cover' />
      </div>
    </section>
  );
}

export default HomePage;
