import React from 'react'
import { ChatContentHeader } from './ChatContentHeader'

export const ChatContent = () => {
  return (
<div className='w-[60%] h-full relative'>
    <div className='absolute h-full w-full flex flex-col '>     
    <ChatContentHeader />
    </div>
</div>
  )
}
