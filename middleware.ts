import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
    const token=await getToken({req:request})
  
  
  if((request.nextUrl.pathname=='/auth/login' || request.nextUrl.pathname=='/auth/signup') && token?.id){

    return NextResponse.redirect(new URL('/',request.url))
  }
 
  if((request.nextUrl.pathname=='/blogs/write' ||
      request.nextUrl.pathname=='/profile'
)
  && !token?.email){
    return NextResponse.redirect(new URL('/blogs',request.url))
  }

}

export const config={
matcher:[
    '/auth/:path*',
    '/blogs/write',
 ]
}
 
