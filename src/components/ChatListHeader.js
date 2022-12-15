import React from 'react'
import { FaUserPlus } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
export const ChatListHeader = () => {
  return (
    <div className='h-[4rem] absolute flex  justify-between w-full bg-gray-200 px-3 py-[.15rem] shadow-sm dark:bg-gray-700 '>
        <div className='cursor-pointer h-full w-[4.5rem] rounded-full overflow-hidden'>
            <img src="./images/avatar.png" alt="" className='h-full w-full ' />
         </div> 
        <div className='w-[35%] h-full p-2 justify-between flex items-center'>
        <button title='Contacts' type="button" className='h-[2.5rem] w-[2.5rem] rounded-full hover:bg-slate-100 flex items-center justify-center'>
           <FaUserPlus className='h-[1.5rem] w-[1.5rem]'/>
        </button>
        <button type="button" className='h-[2.5rem] w-[2.5rem] rounded-full hover:bg-slate-100 flex items-center justify-center'>
          <HiOutlineMenu  className='h-[1.5rem] w-[1.5rem]'/>
        </button>
        </div>
    </div>
  )
}
