import React, {createContext} from 'react';
import { useContext } from 'react';
  
 const StateContext = createContext();

export const UseStateContextProvider = ({children}) => {
  return (
    <StateContext.Provider value={{
          



    }}>
        {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
