import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
    const token=await getToken({req:request})
  console.log("this is token from middleware:",token);
  
  
  if(request.nextUrl.pathname=='/auth/login' && token?.email){
    return NextResponse.redirect(new URL('/',request.url))
  }
  if(request.nextUrl.pathname=='/auth/signup' && token?.email){
    return NextResponse.redirect(new URL('/',request.url))
  }
  if(request.nextUrl.pathname=='/blogs/write' && !token?.email){
    return NextResponse.redirect(new URL('/blogs',request.url))
  }

}

export const config={
matcher:[
    '/auth/:path*',
    '/blogs/write',
 ]
}
 
