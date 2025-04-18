import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from 'next/headers'


export async function middleware(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const cookie = cookieStore.get('jwt');
    if(cookie){
        console.log("cookie")
        const response = NextResponse.next();
        return response;
    }else{
        console.log("pas de cookie")
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }


  } catch (err) {
    console.log(err);
  }
}

export const config = {
    matcher: '/dashboard/:path*',
  }
