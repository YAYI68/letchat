import React from 'react'

export const Main = ({children}) => {
  return (
    <div className='h-[80%] w-[60%] bg-white rounded-md shadow-md overflow-hidden '>
      {children}
    </div>
  )
}
