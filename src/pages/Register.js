import React from 'react'
import { Link } from 'react-router-dom'
import { Main } from '../components/Main'

export const Register = () => {
 const currentColor = '#0093E9'
  return (
    <Main>
    <div className='flex h-full w-full'>
   <div className='h-full grow relative '>
    <div className='absolute flex flex-col gap-2 h-full w-full z-10 p-2'>
       <h2 className='italic text-[2rem] text-left font-semibold ' style={{color:currentColor}}>Let'sChat</h2>
       <div className='h-[80%] w-[90%] mx-auto '>
           <img src="./images/chatme3.png"  className=" object-cover" alt="" />  
       </div>
    </div>   
    </div>
    <div className='grow bg-home-gradient p-2 flex flex-col justify-center items-center'>
      <div className='h-[80%] w-[70%] my-auto flex flex-col items-center'>
        <h2 className='text-[2rem] text-center font-medium' style={{color:currentColor}}>Register</h2>
        <form className='h-[90%] w-full bg-white dark:bg-gray-500 mt-4 rounded-md p-2'>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          </div>
          <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" />
        </div>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          </div>
          <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" />
        </div>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link> </p>
       </div>
      </div>
    </div>
    </Main>
  )
}
