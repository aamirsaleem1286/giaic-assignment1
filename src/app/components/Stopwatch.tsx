import React from 'react'

const Stopwatch = () => {
  return (
  <>
  <div className="flex items-center justify-center h-screen">
<div className="bg-white w-[420px] p-3">
    <h1 className="font-bold text-xl text-center">Countdown Time </h1>
    <input type="text" className="pl-25 border border-gray-400 focus:outline-none mr-4 mt-6" placeholder="Your text here" />
    <button>Set</button>
    </div>


   </div>
  
  </>
  )
}

export default Stopwatch
