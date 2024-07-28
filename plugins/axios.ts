import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import axios from 'axios'


const BASE_URL = process.env.NEST_API_HOST as string;
const COOKIE_NAME = process.env.COOKIE_NAME as string;


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 500,
})

const axiosPublicInstance = 
axios.create({
    baseURL: BASE_URL,
    timeout: 500,
})


axiosInstance.interceptors.request.use(( config )=> {
    const token = cookies().get(COOKIE_NAME)?.value

    if (!token) {

        redirect('auth/login', RedirectType.push)
    }
    
    config.headers = config.headers || {}
    config.headers.Authorization = 'Bearer '+ token;


    return config;
});




export { axiosInstance , axiosPublicInstance };
