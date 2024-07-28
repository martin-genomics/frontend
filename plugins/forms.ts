import { APIResponse } from "@/types/response"
import { TeamType } from "@/types/team"
import axios from "axios"

export class APIForm {

    static async updateUser(formData: Record<string, any>) {

        return new Promise<string>(async (resolve, reject)=> {
            try {

                const  response = await axios.putForm<APIResponse<any>>('/api/user', formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Accept': 'multipart/form-data'
                        }
                    }
                )

                console.log('data: ',response.data.message)
                resolve(response.data.message)
            }catch(error) {
                console.log('error ',error)
            }
        })
    }
    static async updateUserEmail(formData: Record<string, any>) {

        return new Promise<string>(async (resolve, reject)=> {
            try {

                const  response = await axios.put<APIResponse<any>>('/api/user/email', formData)

                console.log('data: ',response.data.message)
                resolve(response.data.message)
            }catch(error) {
                console.log('error ',error)
            }
        })
    }




    // Team api handlers
    
    static async createTeam(form: Record<string, any>) {
        
        return new Promise<TeamType>( async (resolve, reject)=> {

            try{
                
                const { data  } = await axios.postForm<APIResponse<TeamType>>('/api/teams', form);

                resolve(data.data)
            } catch(error) {
                
                reject(error)
            }
        })
    }
}