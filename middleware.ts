import { cookies } from "next/headers";
import { NextRequest  } from "next/server";
import { NextResponse } from "next/server";
const COOKIE_NAME = process.env.COOKIE_NAME as string;

// export { default } from "next-auth/middleware"
// import { AxiosError } from "axios";
export async function middleware(request: NextRequest) {
    const token = cookies().get(COOKIE_NAME)?.value;
    if(token) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/auth/login", request.url));

}


export const config = {
    matcher: [
        "/dashboard",
        "/dashboard/:path*",
        "/contracts/:path*",
        "/members/:path*",
        "/profile/:path*",
        "/teams/:path*",
        "/subscriptions/:path*"        
     ],
    
}

