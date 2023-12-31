import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

function ComplexNavbar({setProgress}) {

  useEffect(() => {
             
    setProgress(20);
    setProgress(30);
    setProgress(40);
    setProgress(50);
    setProgress(60);
    setProgress(70);
    setProgress(80);
    setProgress(90);
    setProgress(100);

}, []);

  return (

<nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 px-2">
    <div className="flex flex-wrap justify-between items-center mx-auto  p-4 font-bold">
        <a href="/" className="flex items-center">
           

<img src="https://firebasestorage.googleapis.com/v0/b/speakup-aa4f8.appspot.com/o/assests%2FSpeak%20Up.png?alt=media&token=35bbef35-844f-4905-804f-d42d3dd18750&_gl=1*3lxcjk*_ga*MjIzNDc0Mzc4LjE2OTgzOTM1ODI.*_ga_CW55HF8NVT*MTY5ODM5MzU4Mi4xLjEuMTY5ODM5MzcyMy4zOS4wLjA." className="h-12 mr-3" alt="SpeakUp logo" />

            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
        </a>
        <button data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div id="mega-menu-full" className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="/" className="block py-2  text-xl pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                </li>
              
                <li>
                    <a href="/about" className="block py-2  text-xl pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                </li>
                <li>
                    <a href="/pricing" className="block py-2  text-xl pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                </li>
                <li>
                    <a href="/getstarted" className="block py-2  text-xl pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Get Started</a>
                </li>

                <li>
                    <a href="/updates" className="block py-2  text-xl pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Updates</a>
                </li>
            </ul>
        </div>
    </div>
   
</nav>


  )
}

export default ComplexNavbar
