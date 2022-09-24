import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Main } from '../components/Main'
import { RightDisplay } from '../components/RightDisplay'
import googleLogo from "./googleLogo.png"

export const Login = () => {
     const [showPassword, setShowPassword] = useState(false)
    const currentColor = '#0093E9'
  return (
    <Main>
        <div className='flex h-full w-full'>
             <RightDisplay />
            <div className='grow bg-home-gradient p-2 flex flex-col justify-center items-center'>
                <div className='h-[80%] w-[70%] my-auto flex flex-col items-center'>
                    <h2 className='text-[2rem] text-center font-medium' style={{color:currentColor}}>Login</h2>
                       <button type="button" className='shadow-md items-center my-[1rem] mx-auto gap-2 px-2 justify-between w-fit h-[2rem] flex rounded-md bg-white'>
                        <img className='h-[1.8rem] w-[1.8rem]' src={googleLogo} alt="" />
                        <span className='block font-medium '>Sign in with google</span>
                       </button>
                     <p className='text-center text-[1rem] text-gray-700 mx-auto mb-2 dark:text-gray-100'>OR</p>
                     <form className='h-[40%] rounded-md w-full bg-white dark:bg-gray-500 my-2 flex flex-col gap-4 p-2'>
                       <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                         <svg aria-hidden="true" className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                       </div>
                       <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" />
                       </div>
                      <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-blue-500 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                        </div>
                        <input type={showPassword?"text":"password"} id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" />
                        {showPassword ?  
                        <div onClick={()=>setShowPassword(false)} className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-auto cursor-pointer">
                        <svg className="w-5 h-5 text-blue-500 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>                        
                        </div>
                        :
                        <div onClick={()=>setShowPassword(true)} className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-auto cursor-pointer">
                        <svg class="w-5 h-5 text-blue-500 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                        </div>
                    }
                      </div>
                       <button type="submit" className='p-2 text-center w-full bg-blue-500 rounded-md text-white' >Login</button>
                  </form>
                     <p>Don't have an account? <Link to="/register" className='hover:underline ' style={{color:currentColor}} >Register</Link></p>
                </div>
            </div>
        </div>
    </Main>
  )
}
