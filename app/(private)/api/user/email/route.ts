import { NextRequest, NextResponse } from "next/server";
import { axiosInstance } from "@/plugins/axios";
import { APIResponse } from "@/types/response";
import { UserType } from "@/types/user";

export async function GET(req:NextRequest) {
    

    try {
        const response = await axiosInstance.get<APIResponse<{ user: UserType}>>('/user/profile')
        // .then(async (data)=> {

        return NextResponse.json(response.data.data.user);
    } catch (error:any) {
        return NextResponse.json(error.response.data, { status: error.response.status})
    }




}


export async function PUT(req: NextRequest) {
    
    try {
    
        const body = await req.formData();
        const { data , status} = await axiosInstance.patch<APIResponse<any>>('user/update/email',body)
        console.log('my data: ' ,data)

        return NextResponse.json(data, { status: status});
        
    } catch (error:any) {
        return NextResponse.json(error.response.data, { status: error.response.status})
    } finally {
        
        return NextResponse.json('Something went wrong', { status: 400})
    }
}