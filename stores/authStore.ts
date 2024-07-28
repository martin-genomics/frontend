import { APIResponse } from "@/types/response";
import { UserType } from "@/types/user";
import axios, { AxiosError } from "axios";

export default class AuthAPI {

    static async loginUser(form: Record<string, string>) {

        return new Promise<APIResponse<{}>>( async (resolve, reject) => {

            try {

                const { request,config, data } = await axios.post<APIResponse<{ }>>('/api/login', form)
                console.log(request, data)
                
                resolve(data);
                
            } catch (error) {
                if( error instanceof AxiosError){
                    reject(error.response?.data.message)
                }
                reject(error)
            }
        })
    }
} 