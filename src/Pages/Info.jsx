
export default function Info() {
    return (
      <section className='block bg-gray-800 rounded-xl md:flex md:items-center text-white py-16 mx-auto md:text-left text-center'>
          <div className='md:w-1/2 flex justify-center mx-auto w-80'><img src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" className='object-contain ' alt="" /></div>
          <div className='md:flex-1 px-12'>
              <h2 className='text-5xl  md:mb-0 mb-4'>Become an instructor</h2>
              <br className='hidden md:block'/>
              <h5 className=''>Instructors from around the world teach millions <br className='hidden md:block' /> of students on Udemy. We provide the tools and <br />skills to teach what you love.</h5><br className='hidden md:block' />
              <button className='px-4 py-2 md:mt-0 mt-8 bg-green-500 text-white font-bold p-2 rounded md:w-auto w-full'>Get Started</button>
          </div>
      </section>
    )
  }