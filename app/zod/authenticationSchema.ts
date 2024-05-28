import { ZodType, z  } from "zod"; 
 
type SignupFormData={
  email:string,
  password:string,
  confirmPassword:string,
  firstName:string,
  lastName:string,
}


const minPassLength=8;
const maxPassLength=20;
const minEmailLength=3;



export const SignupSchema:ZodType<SignupFormData>= z.object({
   email: z.string().min(minEmailLength,"min 3 letters required").email("Invalid Email"),
   password: z
     .string()
     .min(minPassLength, { message: "password must contain atleast 6 characters " })
     .max(maxPassLength, { message: "password must not exceed 20 characters" }),
   confirmPassword: z.string(),
   firstName: z.string()
   .min(2, { message: "first name is too short" })
   .max(10, { message: "first name is too long" }),
   lastName: z.string()
   .min(2, { message: "last name is too short" })
   .max(10, { message: "last name is too long" }),
 }).required({
    email:true,
    password:true,
    confirmPassword:true,
    firstName:true,
    lastName:true,
 })
 .refine((data) => data.password === data.confirmPassword, {
   message: "Passwords do not match",
   path: ["confirmPassword"],
 });



 type LoginFormType={
  email:string,
  password:string,
}

export const LoginSchema:ZodType<LoginFormType>= z.object({
   email: z.string().email("Invalid Email").min(minEmailLength,"min 3 letters required"),
   password: z
     .string()
     .min(minPassLength, { message: "invalid password" })
     .max(maxPassLength, { message: "invalid password" }),
 }).required()
 

type SessionUserType={
  email:string,
  firstName:string,
  lastName:string,
  image?:string
  id:string 
}

 export const SessionUserSchema=z.object({
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  image:z.string().optional().nullable(),
  id:z.string()
})
 export const GoogleUserSchema=z.object({
  email: z.string(),
  firstName: z.string(),
  image:z.string().optional().nullable(),
  id:z.string()
})