import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import {prisma} from "@/lib/prisma"
import { LoginSchema, } from "./app/zod/authenticationSchema";
import { AuthOptions,  } from "next-auth";
import bcrypt from 'bcrypt'
import { User } from "lucide-react";
const authOptions = {
  pages: {
    signIn: "/auth/login",
  },
  

  secret:process.env.NEXTAUTH_SECRET,
  providers: [
    
    Credentials({
      credentials:{
        email:{},
        password:{},
      },
      //@ts-ignore
      async authorize(credentials) {
        
       const verifiedData=LoginSchema.safeParse(credentials);
       if(!verifiedData.success){
        console.log("verification fained");
        
        throw new Error("Failed to Login")
       }
       console.log("login data validated true");
       

       try {
         const {email,password}=verifiedData.data;
          const existingUser=await prisma.user.findFirst({
            where:{
              email,
              provider:"credentials"
            }
          })
          if(!existingUser){
            console.log("user does not exist");
            
            throw new Error("Account does not exist !")
          }

          console.log("user exists");
          
          const isPassCorrect=await bcrypt.compare(password,existingUser.password!);
          if(!isPassCorrect){
            throw new Error("Enter correct password")
          }
          console.log("password is correct"); 
          
          return {
            name:existingUser.name,
            email:existingUser.email,
            id:existingUser.id,
            image:existingUser.image,
            provider:existingUser.provider,
          }
       } catch (error:any) {

        return null;
       }
      
         },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,

     
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,

    }),
    
    
  ],
  session:{
    strategy:'jwt'
  }
  ,
  callbacks: {
    async jwt({ token, user, account }:any) {

    

      if (user && account?.provider == "credentials") {
       
        return { ...user };
      }
      if (account?.provider == "google") {   
        try {
          const googleUser = await prisma.user.findFirst({
            where:{
              email:user.email,
              provider:'google'
            }
          })
          if (googleUser) {
           return {
          ...token,
          id:googleUser.id,
          provider:googleUser.provider,
          image:googleUser.image
           }
          }
      
          // else create one
      
          const newGoogleUser=await prisma.user.create({
              data:{
                  name:user.name,
                  email:user.email,
                  image:user.image,
                  provider:"google"
              }
          })
          if(!newGoogleUser){
             throw new Error("Failed to login .")
          }
          return { 
         ...token,
         id:newGoogleUser.id,
         provider:newGoogleUser.provider,
         image:newGoogleUser.image
          }
      
        } catch (error) {
          console.log("error from google create account");
      
          throw new Error("failed to login .")
        }
        }
      if (account?.provider == "github") {   
        try {
          const githubUser = await prisma.user.findFirst({
            where:{
              email:user.email,
              provider:'github'
            }
          })
          if (githubUser) {
           return {
          ...token,
          id:githubUser.id,
          provider:githubUser.provider,
          image:githubUser.image
           }
          }
      
          // else create one
      
          const newGithubUser=await prisma.user.create({
              data:{
                  name:user.name,
                  email:user.email,
                  image:user.image,
                  provider:"github"
              }
          })
          if(!newGithubUser){
             throw new Error("Failed to login .")
          }
          return { 
         ...token,
         id:newGithubUser.id,
         provider:newGithubUser.provider,
          image:newGithubUser.image
          }
      
        } catch (error) {
          console.log("error from github create account");
      
          throw new Error("failed to login . try again")
        }
        }
        
        return token
       
    } ,async session({session,token }:any) {
  //  console.log("this is session data:",session.user); 
   if(token){
    session.user={ 
    name: token.name,
    email: token.email,
    id: token.id,
    image: token.image,
    provider: token.provider,  
  };
   }
      return session;
    },
    },
   
  
} as AuthOptions;

export default authOptions;
