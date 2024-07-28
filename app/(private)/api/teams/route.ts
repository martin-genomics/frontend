import { axiosInstance } from "@/plugins/axios";
import { APIResponse } from "@/types/response";
import { TeamType } from "@/types/team";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";





export async function GET() {
    try {

        // const url = new URL(req.url);
        // console.log()
        const { data } = await axiosInstance.get<APIResponse<{teams: TeamType[]}>>('/user/teams/all');
        console.log(data.data)

        return NextResponse.json(data.data, { status: 200 });

    } catch (error:any) {
        // console.log(error)
        // if()
        return NextResponse.json(error.response.data, { status: error.response.status })
    }

} 


// Team creation handler

export async function POST(req: NextRequest) {

    try {

        const formData = await req.formData()

        const { data, status } = await axiosInstance.postForm('/user/teams/new', formData);
        console.log(data, status);
        return NextResponse.json(data, { status: 200 });
    } catch (error) {

        if (error instanceof AxiosError) {
            console.log('DATA:', error.code);
            if (error.code === 'ERR_BAD_REQUEST') {
                console.log()
                return NextResponse.json(
                    error?.response?.data,
                    { status: 409 })
            }

            if (error.code === 'ECONNREFUSED') {
                return NextResponse.json({
                    success: false,
                    message: 'Could not establish the connection to the server. Try again later.'
                },
                    { status: 503 })
            }

        }
        // Unknown error handled
        return NextResponse.json({}, { status: 500 })
    }

}