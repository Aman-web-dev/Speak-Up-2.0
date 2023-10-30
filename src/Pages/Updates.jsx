import React from 'react'
import UpdatesCard from '../components/UpdatesCard'

function Updates() {
  return (
    <div className='min-h-screen'>
      
<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Updates</h1>
<p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Remain Updated with New Updates related To upcoming batches and Classes.</p>


<div className='w-[80vw] flex flex-wrap m-auto'>

<UpdatesCard/>
<UpdatesCard/>
<UpdatesCard/>



<UpdatesCard/>
<UpdatesCard/>
<UpdatesCard/>
<UpdatesCard/>
<UpdatesCard/>
<UpdatesCard/>


    
</div>


    </div>
  )
}

export default Updates
