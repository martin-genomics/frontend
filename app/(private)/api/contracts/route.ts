import { NextRequest, NextResponse } from "next/server";
import { redirect, RedirectType } from "next/navigation";
import { cookies } from "next/headers";
import { axiosInstance } from "@/plugins/axios";
import { APIResponse } from "@/types/response";
import { ContractType } from "@/types/contract";
import { AxiosError } from "axios";

export async function GET(req: NextRequest, context: any) {
    const { contractId } = context;


    try {

        let url = new URL(req.url);
        let final_url = '/user/contracts'
        if(url.searchParams.get('status'))
                 final_url + '?status=' + url.searchParams.get('status')

        // console.log()
        const { data } = await axiosInstance.get<APIResponse<ContractType[]>>(final_url);

        return NextResponse.json(data.data, { status: 200 });

    } catch (error) {

        if(error instanceof AxiosError){
            console.log(error.response?.data)
            return NextResponse.json({}, { status: error.response?.status })
        }
    }




}