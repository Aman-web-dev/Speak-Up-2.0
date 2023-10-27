import React from 'react'
import Calendar from './Calendar'

function TimeTable() {
  return (
    <div className=''>
     <h1 className='text-4xl text-black font-bold my-4'>Upcoming Batches</h1>
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
        <Calendar language={"Japanese"}/>
        <Calendar language={"Mandrin"}/>


     </div>
    </div>
  )
}

export default TimeTable
