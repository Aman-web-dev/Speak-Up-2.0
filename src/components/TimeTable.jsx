import React from 'react'
import Calendar from './Calendar'

function TimeTable() {
  return (
    <div className=''>
     <h1 className='text-4xl text-black font-bold my-4'>Upcoming Batches</h1>
     <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Stay Updated with Offline and Online Batches of Speak-Up <br></br> 
     
     Check Below For the Upcoming batches and Classes.
     
     </p>

     <div className='flex xl:flex-wrap  overflow-x-scroll overflow-y-hidden xl:overflow-x-hidden gap-4 m-auto w-[80vw]'>

        <Calendar language={"English"}/>
        <Calendar language={"Korean"}/>
        <Calendar language={"Japanese"}/>
        <Calendar language={"Mandrin"}/>
        <Calendar language={"Portugese"}/>
        <Calendar language={"French"}/>
        <Calendar language={"Russian"}/>
        <Calendar language={"Russian"}/>
        <Calendar language={"English"}/>
        <Calendar language={"Korean"}/>
   


     </div>
    </div>
  )
}

export default TimeTable
