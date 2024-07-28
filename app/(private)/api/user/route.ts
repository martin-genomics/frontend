// import api from "@/lib/secureFetch";
import { NextRequest, NextResponse } from "next/server";
import { redirect, RedirectType } from "next/navigation";
import { cookies } from "next/headers";
import axios from "axios";
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

    const formData = await req.formData();
    console.log('my data: ' ,formData)
    
    try {
        const { data , status} = await axiosInstance.patchForm<APIResponse<any>>(formData.has('picture')? `/user/upload-picture` : 'user/update',formData)

        return NextResponse.json(data, { status: status});
        
    } catch (error:any) {
        // console.log(error)
        console.log(error.response.data)
        return NextResponse.json(error.response.data, { status: error.response.status})
    }
}