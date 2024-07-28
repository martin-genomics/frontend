import { NextRequest, NextResponse } from "next/server";
import { redirect, RedirectType } from "next/navigation";
import { cookies } from "next/headers";
import { APIResponse } from "@/types/response";
import { axiosInstance } from "@/plugins/axios";


export async function GET(req:NextRequest) {
    
    
    try {
        const response = await axiosInstance.get<APIResponse<any>>('/user/categories')
        console.log(response.data.data)
    
        return NextResponse.json(response.data.data.categories);
        
        
    } catch (error:any) {
        console.log(error)
        return NextResponse.json(error.response.data, { status: error.response.status})
    }

}


export async function PUT(req: NextRequest) {
    const formData = await req.formData();

    try {
        const { data , status} = await axiosInstance.putForm(formData.has('picture')? `/user/upload-picture` : 'user/update',formData)
        // console.log(token, formData)

        return NextResponse.json(data, { status: status});
        
    } catch (error:any) {
        // console.log(error)
        console.log(error)
        return NextResponse.json(error.response.data, { status: error.response.status})
    }
}