// import Contracts from "@/components/Contracts/Contracts";
import { ContractType } from "./contract";
import { TeamType } from "./team";

export interface MemberType {
  id: number;
  name: string;
  title: string;
  picture: string;
  description: string;
  skills: string[];
  email: string;
  role: string;
  educationalHistory: {
    instituteName: string;
    instituteLocation: string;
    programmeOfStudy: string;
    yearCompleted: string;
  };
  cv: string;
  isActive: boolean;
  contracts: ContractType[];
  teams: TeamType[];
  dob: Date;
  updatedAt: Date;
  createdAt: Date;
}
