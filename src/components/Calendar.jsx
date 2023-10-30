// import { Hardware } from '@mui/icons-material'
import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { LockClock } from '@mui/icons-material';
import { Chair,ArrowForward } from '@mui/icons-material';


function Calendar(props) {
    return (
        <div className='max-h-[50] max-w-sm lg:w-auto xl:w-auto bg-white rounded-xl p-2 m-auto p-4 shadow-xl my-4 hover:-translate-y-2 transform transition-transform'>



            <span className="my-4 inline-block px-2 py-1 leading-none bg-blue-600 text-white  font-semibold uppercase tracking-wide text-xs">WeekDay</span>

            <div id='top-image' className='font-bold text-black my-2'>{props.language}</div>


            <div id='top-image' className='  rounded p-4'>
                
                <p className='text-green-500 font-bold my-2'>Starting From Day {props.Day}</p>
            <ul className='text-black text-justify'>
                <li><CalendarMonthIcon/> Item-1</li>
                <li><LockClock/> Item-2</li>
                <li><Chair/> Item-3</li>

            </ul>
                
                
                
            </div>
       

            <button class="my-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-blue-600">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Register Now <ArrowForward/>
  </span>
</button>
        </div>
    )
}

export default Calendar
