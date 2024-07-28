import { MemberType } from "./member";
import { TeamType } from "./team";
import { UserType } from "./user";


export interface projectMilestones {
        id: number;
        title: string;
        description: string;
        isPaid: boolean;
        amount: boolean;
        dueDate: Date
}

export interface ContractType {
    id            :number   
    title         :string
    categories    : any;    
    category: string;
    description   :string
    contractType: 'hourly' | 'fixed';
    contractSkills : any[];
    paymentOption: {
        hourlyRate: number;
        frequency: 'weekly' | 'biweekly' | 'monthly' | 'milestone';
        projectAmount: number;
        initialDeposit: number;
        paymentDate: Date;
    };     
    deadline: {
        duration: number;
        durationIn: string;
    };     
    clientEmail   :string
    client        : any; 
    isAccepted    :boolean;   
    isSubmitted   : boolean;   
    isRejected: {
        state: boolean;
        reasons: {
            label: string;
            value: string;
        }[];
        description: string;
    };
    proposedAs: 'team' | 'individual';
    userId?        :string;
    user?          : UserType;    
    teamId?        :number   
    team?          :TeamType   
    members       :MemberType[]
    projectMilestones: projectMilestones[];
    clientInformation: {
        firstName: string;
        lastName: string;
        email: string;
        picture: string
    };
    deleted: {
        status: boolean;
        deletedAt: Date
    },
    status        :string    
    updatedAt     :Date;  
    createdAt     :Date;  
}