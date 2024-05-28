import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

import { SessionUserSchema } from "./app/zod/authenticationSchema";
import { AuthOptions } from "next-auth";

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
      async authorize(credentials) {
       const verifiedData=SessionUserSchema.safeParse(credentials);
       if(!verifiedData.success){
        throw new Error("Failed to Login")
       }
       return verifiedData.data;
         },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,

      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
        },
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,

    }),
    
    
  ],
  callbacks: {
    async jwt({ token, user, account }) {
    

      if (user && account?.provider == "credentials") {
        return { ...token, id: user.id };
      }
      if (account?.provider == "google") {

        const res = await fetch(
          "http://localhost:4000/auth/login/google",
          {
            method: "POST",
            body: JSON.stringify({ email: user.email }),
            headers: { "Content-Type": "application/json" },
          }
        ); 
        const googleResponse=await res.json()
        if(res.status==404){ // user not found
         
          const rs = await fetch("http://localhost:4000/auth/register/google", // creating new user
            {
              method: "POST",
              body: JSON.stringify({
                name: user.name,
                email: user.email,
                image: user.image,
              }),
              headers: {
                "Content-Type": "application/json",
              } }

          );
          const newUser=await rs.json();
          if (!newUser.data) {      // newUser={sucess:true,data:userData}
            throw new Error("Failed to create new user ..") ;
          } else {
            return {             
              id: newUser.data.id,
              ...token
            };
          }
        }
        // else user found so
        const response = await res.json();
        if (res.status==200) {
          return {
           id:response.data.id,
           ...token
          };
        }
    }
    },
    async session({session}) {
     
      return session;
    },
  },
} as AuthOptions;

export default authOptions;
