import { SunIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Loading = () => {

  return (
    <div className=' flex justify-center  items-center flex-col  h-screen fixed  w-screen inset-0 '>
        <SunIcon className=' h-24 w-24 text-blue-700 animate-spin mb-9'/>
        <div className="text-4xl font-bold animate-pulse">
            Loading Your  page 
        </div>
    </div>
  )
}

export default Loading
