import React from 'react'
import { ChatContent } from '../components/ChatContent'
import { ChatList } from '../components/ChatList'
import { Main } from '../components/Main'



export const Home = () => {
  const currentColor = '#0093E9'
  return (
    <Main>
      <div className='h-full w-full flex flex-col '>  
        <div className='w-full bg-white dark:bg-main-dark-bg h-[5%] px-4'>
          <p style={{color:currentColor}} className="font-semibold">Let'chat</p>
        </div>
        <div className='flex w-full h-[95%]'>
            <ChatList />
            <ChatContent/>
        </div>
      </div>
    </Main>
  )
}
