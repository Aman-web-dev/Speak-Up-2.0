import React,{ useState } from 'react'
import Slider from 'react-slick';
  
import '../App.css'
import { dataDigitalBestSeller } from '../assets/Data';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import imgGirl from '../assets/img1.svg'



const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;


  return (
    <div className="arrow-next slick-prev bg-gray-500 rounded-full hover:bg-gray-700" onClick={props.onClick}>
      <KeyboardArrowLeftIcon />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
    className="arrow-left slick-next bg-gray-500 rounded-full hover:bg-gray-700 " onClick={props.onClick}
    >
      <KeyboardArrowRightIcon />
    </div>
  );
};


export default function LanguageSlider() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  return (
    <section className='w-full bg-gray-100 p-12'>
      
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Demo Videos </h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
<a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    Learn more
    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>

    <div className="App my-2">
      <Slider {...settings}
      prevArrow={<CustomPrevArrow />}
      nextArrow={<CustomNextArrow />} className=''>
        {dataDigitalBestSeller.map((item) => (
          <div className="card-language">
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
            </div>
            <div className="card-content">
              <h2 className="card-title">{item.title}</h2>
            </div>
            <div className="card-bottom">
              <h5>{item.price}</h5>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </section>
  )
}