"use client";
import React from "react";
import InputBox from "./Input";
import Link from "next/link";

import { FieldValues, useForm } from "react-hook-form";
import OAuthButton from "./OAuthButton";
import { useRouter } from "next/navigation";
import { SignupSchema } from "@/app/zod/authenticationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "../ui/use-toast";

export default function SignupForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    setError,
  } = useForm<FieldValues>({
    resolver: zodResolver(SignupSchema),
  });

  const submitForm = async (data: any) => {
    const formData = SignupSchema.safeParse(data);
    console.log(formData.success);
    

    if (!formData.success) {
      toast({
        title: "Submission Error",
        description: "fill the form correctly or try again later",
      });
      return;
    }
    const signupResponse = await fetch(
      "http://localhost:3000/api/auth/register",
      {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
          confirmPassword: data.confirmPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response = await signupResponse.json();
    console.log(response);  
    
    if (response.error) {
      toast({
        title: "Signup Failed",
        description: response.error,
      });
    } else {
      toast({
        title: "Signup sucess ",
        description: response.message,
      });
      router.push("/auth/login");
    }
    return;
  };

  return (
    <div className="max-w-md w-full mx-auto  rounded-r-2xl   md:w-[30rem] h-full text-gray-400  p-4 md:p-8 shadow-input bg-[#141414] dark:bg-black">
      <form className=" text-[14px]" onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col relative md:flex-row space-y-2  md:space-y-0 md:space-x-2 mb-4">
          <div className="relative">
            <label htmlFor="firstname">First Name</label>
            <InputBox
              {...register("firstName", {
                required: "this field is required !!",
              })}
              // @ts-ignore
              id="firstname"
              placeholder="John"
              type="text"
            />
            {errors.firstName && (
              <span className="absolute text-[12px]  right-[-5px] text-red-600 font-sans px-4">
                {errors.firstName.message as React.ReactNode}
              </span>
            )}
          </div>
          <div className="relative">
            <label htmlFor="lastname">Last name</label>
            <InputBox
              {...register("lastName", {
                required: "this field is required !!",
              })}
              // @ts-ignore
              id="lastname"
              placeholder="Doe"
              type="text"
            />
            {errors.lastName && (
              <span className="absolute text-[12px] bottom-[-20px] right-[-5px] text-red-600 font-sans px-4">
                {errors.lastName.message as React.ReactNode}
              </span>
            )}
          </div>
        </div>
        <div className="mb-4 relative flex flex-col gap-2">
          <label htmlFor="email">Email Address</label>
          <InputBox
            // @ts-ignore
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
          {errors.email && (
            <span className=" absolute text-[12px] bottom-[-20px] right-[-5px] text-red-600 font-sans px-4">
              {errors.email.message as React.ReactNode}
            </span>
          )}
        </div>
        <div className=" relative mb-4 flex flex-col gap-2">
          <label htmlFor="password">Password*</label>
          <InputBox
            {...register("password", {
              required: "password is required !!",
              minLength: {
                value: 6,
                message: " password must be at least 6 characters long.",
              },
            })}
            // @ts-ignore
            id="password"
            placeholder="**********"
            type="password"
          />
          {errors.password && (
            <span className="absolute text-[12px] bottom-[-20px] right-[-5px] text-red-600 font-sans px-4">
              {errors.password.message as React.ReactNode}
            </span>
          )}
        </div>
        <div className="relative mb-6 flex flex-col gap-2">
          <label htmlFor="confirmPassword">confirm password *</label>
          <InputBox
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "field is required !!",
            })}
            // @ts-ignore
            placeholder="**********"
            type="password"
          />
          {errors.confirmPassword && (
            <span className="text-[12px] absolute bottom-[-20px] right-[-5px] text-red-600 font-sans px-4">
              {errors.confirmPassword.message as React.ReactNode}
            </span>
          )}
        </div>

        <div className="flex gap-3 py-2">
          <button
            className="bg-gradient-to-br border-[1px] border-gray-800  relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit &rarr;
            <BottomGradient />
          </button>

          <div className="flex gap-1 flex-col   relative w-full ">
            <span className="text-[10px] absolute top-[-40%]  font-sans text-gray-500">
              Already have an account ?
            </span>
            <Link href="/auth/login">
              <button className="bg-gradient-to-br border-[1px] border-gray-800  relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
                Login
                <BottomGradient />
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-5 mb-3 h-[1px] w-full" />
        <span className="font-sans text-gray-400 w-full flex justify-center items-center text-[13px] mb-4">
          Or Continue with
        </span>
      </form>
      <div className="flex  gap-5 ">
        <OAuthButton type="google">
          <BottomGradient />
        </OAuthButton>
        <OAuthButton type="github">
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
