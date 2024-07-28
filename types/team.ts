import { MemberType } from "./member"
import { ContractType } from "./contract"
import { UserType } from "./user"
import { CategoryType } from "./category"

export interface TeamType {
    id                 :number      
    name               :string
    coverImage         :string
    logo               :string
    yearFounded        :number
    minimumProjectSize :string
    teamSize           :string
    location           :string
    status             :any         
    isActive           :boolean      
    userId             :string       
    user               :UserType;       
    members            :MemberType[];
    contracts          :ContractType[]
    reports            :Report[]
    categories         :CategoryType[]
    updatedAt          :Date
    createdAt          :Date
}