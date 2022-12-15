import React from 'react'
import {MdPhone} from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import { TbSearch } from "react-icons/tb";

export const ChatContentHeader = () => {
    const currentColor = '#0093E9'
  return (
    <div className='h-[4rem] absolute flex  justify-between w-full bg-gray-200 px-3 py-[.15rem] shadow-sm dark:bg-gray-700 '>
    <div className='h-full flex items-center gap-2 w-[40%]'>     
      <div className='cursor-pointer h-full w-[4.5rem] rounded-full overflow-hidden'>
        <img src="./images/avatar.png" alt="" className='h-full w-full ' />
      </div>
     <p className='text-[1.5rem] font-medium' style={{color:currentColor}}>Yayi</p> 
    </div>
    <div className='w-[35%] h-full p-2 justify-between flex items-center'>
    <button title='Contacts' type="button" className='h-[2.5rem] w-[2.5rem] rounded-full hover:bg-slate-100 flex items-center justify-center'>
       <FiVideo className='h-[1.5rem] w-[1.5rem]'/>
    </button>
    <button type="button" className='h-[2.5rem] w-[2.5rem] rounded-full hover:bg-slate-100 flex items-center justify-center'>
      <MdPhone  className='h-[1.5rem] w-[1.5rem]'/>
    </button>
    <button type="button" className='h-[2.5rem] w-[2.5rem] rounded-full hover:bg-slate-100 flex items-center justify-center'>
      <TbSearch  className='h-[1.5rem] w-[1.5rem]'/>
    </button>
    </div>
</div>
  )
}
