"use client"
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

interface EditorNavButtonProps{
  children?:React.ReactNode,
  className?:string,
  onClick:()=>void,
  isActive:boolean,
  
}


const  EditorNavButton:React.FC<EditorNavButtonProps>=({children,className,onClick,isActive,...props})=> {

  return (
   <button onClick={()=>{onClick()}}
    // className={clsx("hover:text-white h-10  shadow-sm shadow-black hover:bg-slate-800 transition-all duration-100 px-2  py-1 border-[1px]  rounded-md",bg) } 
    className={`hover:text-white h-10 ${isActive && "bg-blue-300"}  shadow-sm shadow-black hover:bg-slate-800 transition-all duration-100 px-2  py-1 border-[1px] ${isActive && "bg-blue-300"} rounded-md` } 
     {...props}>
    {children}
   </button>
  )
}

export default EditorNavButton