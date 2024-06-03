"use client";
import React from "react";
import Link from "next/link";
import InputBox from "./Input";
import {  FieldValues,  useForm } from "react-hook-form";
import OAuthButton from "./OAuthButton";
import { signIn } from "next-auth/react";
import { toast } from "../ui/use-toast";
import { LoginSchema } from "@/app/zod/authenticationSchema";
import { zodResolver } from "@hookform/resolvers/zod";



export default function  LoginForm() {

  
  const {
    register,
    handleSubmit,
    formState: { errors , isLoading},
    setError,
  } = useForm<FieldValues>({
    resolver: zodResolver(LoginSchema), 
  });


  const submitForm =async (data:any) => {
    const formData=(LoginSchema.safeParse(data))
    
    if(!formData.success){
      toast({
        title: "Submission Error",
        description: "Fill the form correctly or try again later",
      })
      return ;
    }
    try {
      
         await signIn('credentials',formData.data) 
   
    } catch (error:any) {
     
      
      toast({
        title: "Login Failed",
        description: " try again with different credentials ..",
      })
      return ;
    }
  };

  

 
  
  return (
    <div className="max-w-md w-full mx-auto bg-[#141414]  rounded-r-2xl  h-full md:w-[30rem]  text-gray-400  p-4 md:p-8 shadow-input  dark:bg-black">
    
      <form  className="my-8 text-[14px] text-gray-300" onSubmit={handleSubmit(submitForm)}>
        <div className="mb-4 relative flex flex-col gap-2">
        <label htmlFor="email">Email Address</label>
          <InputBox
          //@ts-ignore
            
            id="email"
            placeholder="johndoe@gmail.com"
            type="email"
            {...register("email", {
              required: "email is required !!",
              minLength: {
                value: 5,
                message: " email must be at least of 5 characters.",
              },
            })}
          />
           {errors.email &&   <span className="absolute md:text-[12px] text-[9px]  bottom-[-20px] right-[-5px] text-red-600 font-sans px-4">{errors.email.message  as React.ReactNode}</span>}
        </div>
        <div className="relative mb-4 flex flex-col gap-2">
        <label htmlFor="password">Password*</label>
          <InputBox 
          {...register("password", {
            required: "password is required !!",
            minLength: {
              value: 6,
              message: " password must be at least 6 characters long.",
            }
          })}
          //@ts-ignore
          id="password" placeholder="**********" type="password" />
           {errors.password &&   <span className="absolute md:text-[12px] text-[9px] bottom-[-20px] right-[-5px] text-red-600 font-sans px-4">{errors.password.message as React.ReactNode}</span>}
        </div>

        <div className="flex gap-3 pt-[20px] flex-col">
          <button
          disabled={isLoading}
            className=" border-[1px] border-gray-500 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit &rarr;
            <BottomGradient />
          </button>

          <div className="flex gap-1 flex-col">
            <span className="text-[10px] font-sans text-gray-500">
              Don't have an account ?
            </span>
            <Link href="/auth/signup">
              <button
                className="border-[1px] border-gray-500  bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                
              >
                Sign up
                <BottomGradient />
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-8 mb-3 h-[1px] w-full" />
        <span className="font-sans text-gray-400 w-full flex justify-center items-center text-[13px] mb-4">
          {" "}
          Or Continue with
        </span>
      </form>
        <div className="flex  gap-5 ">
          <OAuthButton  disabled={isLoading} type="google">
           <BottomGradient />
          </OAuthButton>
          <OAuthButton   disabled={isLoading} type="github">
          <BottomGradient />
          </OAuthButton>
         
        </div>
    </div>
  );

}
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
