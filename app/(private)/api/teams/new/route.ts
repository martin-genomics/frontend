import { BASE_URL, COOKIE_NAME } from "@/lib/constants";
import { NextResponse, NextRequest } from "next/server";
import { api } from "@/lib/api";
import { AxiosError } from "axios";
import cookie from 'cookie'


export async function POST(req: NextRequest) {
    const body = req.body;
    const data = req.headers.get('cookie');
    // console.log(await req.formData())
    if (!data) {

        return NextResponse.json({ success: false, message: 'No Access Token', data: { action: 'login' } }, { status: 401 })
    }

    var cookiesData = cookie.parse(data);
    const AUTH_TOKEN = cookiesData[COOKIE_NAME];

    try {

        const { data, status } = await api.postForm('/user/teams/new', await await req.formData(), {

            headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`
            }
        });
        console.log(data, status);
        return NextResponse.json(data, { status: 200 });
    } catch (e) {

        if (e instanceof AxiosError) {
            console.log('DATA:', e.code);
            if (e.code === 'ERR_BAD_REQUEST') {
                console.log()
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