import React from 'react';
import Card from '../components/Card';
import BigCard from '../components/BigCard';
import CalenderCard from '../components/CalenderCard';
// import './YourStyles.css'; // Import your custom styles

function CardHolder() {
  return (
    <div className='w-[90vw] my-5 flex flex-col m-auto flex-center p-2 bg-white'> 
    
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Language Courses</h1>
<p className="mb-6 text-lg font-normal text-black lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
<a href="#" className="inline-flex  my-2 m-auto  items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    Learn more
    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>

      <div className=' w-[90vw] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 m-auto'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>


    </div>
  );
}

export default CardHolder;
