import React from 'react'

export const RightDisplay = () => {
    const currentColor = '#0093E9'
  return (
    <div className='h-full grow relative '>
    <div className='absolute flex flex-col gap-2 h-full w-full z-10 p-2'>
       <h2 className='italic text-[2rem] text-left font-semibold ' style={{color:currentColor}}>Let'sChat</h2>
       <div className='h-[80%] w-[90%] mx-auto '>
           <img src="./images/chatme.png"  className=" object-cover" alt="" />  
       </div>
    </div>   
   </div>
  )
}
