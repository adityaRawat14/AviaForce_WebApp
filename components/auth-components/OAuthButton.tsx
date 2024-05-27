"use client"
import {signIn} from 'next-auth/react'
import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";


interface OAuthButtonInterface{
  type:'google'|'github',
  className?:String,
  children:React.ReactNode
}


const  OAuthButton:React.FC<OAuthButtonInterface>=({ type, className, children }) =>{
  return (
    <button className={className + "  border-[1px]   border-gray-500  group/btn flex  gap-5 items-center relative justify-start px-4 w-full bg-black rounded-md h-10 font-medium shadow-input  dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]" }
    onClick={()=>{signIn("google")}}
    >
      <span className="text-white ">
        {type == "github" ? <FaGithub /> : <FaGoogle />}
      </span>
      <span className="text-gray-200 dark:text-neutral-300 text-sm">
        {type == "github" ? "GitHub" : "Google"}
      </span>
      {children}
    </button>
  );
}

export default OAuthButton;
