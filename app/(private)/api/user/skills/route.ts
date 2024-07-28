import { NextRequest, NextResponse } from "next/server";
import { axiosInstance } from "@/plugins/axios";
import { APIResponse } from "@/types/response";


export async function GET(req:NextRequest) {
    

    try {
        const response = await axiosInstance.get<APIResponse<any>>('/user/skills')
        return NextResponse.json(response.data.data.skills);
        
        
    } catch (error:any) {
        console.log(error)
        return NextResponse.json(error.response.data, { status: error.response.status})
    }




}


