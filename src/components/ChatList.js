import React from 'react'
import { ChatListHeader } from './ChatListHeader'


export const ChatList = () => {
  return (
           <div className='w-[40%] shadow-md border-r-1 relative border-r-gray-400 h-full '>
           <div className='h-full absolute w-full flex flex-col dark:bg-main-dark-bg bg-white'> 
             <ChatListHeader/>
           </div>
            </div>
  )
}
