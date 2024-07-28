import { NextRequest, NextResponse } from "next/server";

import { COOKIE_NAME, BASE_URL } from "@/lib/constants";
import api from "@/lib/secureFetch";
import { redirect, RedirectType } from "next/navigation";
import { cookies } from "next/headers";



export async function GET(req: NextRequest, context: any) {
    const { params } = context;
    const { teamId } = params;
    console.log(params)
    const token = cookies().get(COOKIE_NAME)?.value

    if (!token) {

        redirect('auth/login', RedirectType.push)
    }


    try {

        // const url = new URL(req.url);
        // console.log()
        const { data } = await api.get(BASE_URL + `/user/teams/${teamId}`, {
            headers: {
                'Authorization': 'Bearer ' + token,
            },

        });


        return NextResponse.json(data, { status: 200 });

    } catch (error:any) {
        // console.log(error.response)
        return NextResponse.json({}, { status: error.status })
    }

}