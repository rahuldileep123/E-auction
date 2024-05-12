import React, {createContext, useState } from 'react'
export const expireResopnseContext=createContext()
export const deleteResponseContext=createContext()
function ContextApi({children}) {

    const [expireResponse,setExpireResponse]=useState("")
    const [deleteResponse,setDeleteResponse]=useState("")
  return (
    <>
        <expireResopnseContext.Provider value={{expireResponse,setExpireResponse}}>
       <deleteResponseContext.Provider value={{deleteResponse,setDeleteResponse}}>
            
            {children}
            
       </deleteResponseContext.Provider>
          </expireResopnseContext.Provider>
    </>
  )
}

export default ContextApi