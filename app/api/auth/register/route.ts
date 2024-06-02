import { NextRequest, NextResponse as res } from "next/server"; 
import bcrypt from 'bcrypt'
import {prisma} from "@/lib/prisma"
import { SignupSchema } from "@/app/zod/authenticationSchema";

export const POST = async (req: NextRequest)=> {
  console.log("register route hit !");

  const reqData=await req.json()
  const validatedData=SignupSchema.safeParse(reqData);
  
  if(!validatedData.success){
    console.log(validatedData);
    
    return res.json({error:"invalid credentials"},{status:400})
  }
  const {firstName,lastName,password,confirmPassword,email}=validatedData.data;
  if((confirmPassword!=password)){
    console.log({
      confirmPassword,
      password 
    });
    
    return res.json({error:"both passwords should match "},{status:400})
  }

  try {
    console.log(typeof prisma.user.findFirst);
    
    const existingUser = await prisma.user.findFirst({
      where:{
        email
      }
    })
    if (existingUser) {
      return res.json({ error: "User already exists" }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const name=firstName+" "+lastName
    const newUser = await prisma.user.create({
      data:{
        name,email,password:hashedPassword,provider:"credentials"
      }
    });

    console.log(newUser);
    
    return res.json({message:"now you can login with these credentials"}, { status: 200 });
  } catch (error) {
    console.log(error);
 
    return res.json({ error: "An error occurred" }, { status: 500 });
  }
};