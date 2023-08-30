import React from 'react';
import data from '../assets/data.json';
import Card from '../components/VideoCard'
import { useNavigate } from 'react-router-dom';

function Video() {
  const navigate = useNavigate();

  const handleClick = async(e) => {
    const videoUrl = e.target.id;
    console.log(videoUrl);
     sessionStorage.setItem('videoUrl', videoUrl);
  };

  return (
    <div className='p-4'>

<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Demo Videos </h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Watch These Demo Courses to Know what you Gonna Get In future. Hole your Breath and Wait for the immerse Experience. </p>
<a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    Learn more
    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>

    <div className='grid my-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  m-auto w-[90vw]'>
      {data.map((elem) => (
        <div key={elem.url} onClick={handleClick} id={elem.url}>
          <Card
            thumbnail={elem.thumbnail}
            description={elem.description}
            price={elem.price}
            title={elem.title}
            url={elem.url}
          />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Video;
