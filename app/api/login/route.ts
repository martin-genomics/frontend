import { axiosPublicInstance } from "@/plugins/axios";
import { AxiosError, AxiosResponseHeaders } from "axios";
import { parse, serialize } from "cookie";
import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME } from "@/lib/constants";
import { cookies } from "next/headers";


export async function POST(req: NextRequest) {
    console.log(COOKIE_NAME, ' cookie name')
    const { email, password } = await req.json() as { email: string; password: string };
    try {
        const res = await axiosPublicInstance.post('/auth/signin', { email: email, password: password, rememberMe: true });
        const { data } = res;
        setAuthCookie(res)

        return NextResponse.json({
            success: true,
            message: 'Login successfull',
            data: {
                
            }
        },
            {
                status: 200
            });

    } catch (e) {

        if (e instanceof AxiosError) {
            if (e.code === 'ERR_BAD_REQUEST') {
                return NextResponse.json(
                    e?.response?.data,
                    { status: 409 })
            }

            if (e.code === 'ECONNREFUSED') {
                return NextResponse.json({
                    success: false,
                    message: 'Could not establish the connection to the server. Try again later.'
                },
                    { status: 503 })
            }

        }

        return NextResponse.json({}, { status: 500 })
    }

}



const setAuthCookie = (response: any) => {
    const setCookieHeader = response.headers.get("Set-Cookie");
    const date = parse(setCookieHeader[0])['Expires'];
    

    if(setCookieHeader) {
        const token = setCookieHeader[0].split(';')[0].split('=')[1];
        const g = cookies().set({
            name: COOKIE_NAME,
            value: token,
            secure: true,
            httpOnly: true,
            expires:  new Date(date)
        });

        
    }
}


export async function GET(req: NextRequest) {



    return NextResponse.json({}, { status: 200 })
    
}