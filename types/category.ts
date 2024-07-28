import { TeamType } from "./team";
import { UserType } from "./user";


export interface CategoryType {
    id        :string;
    name      :string
    skills    : any[];
    isActive  :boolean;
    user?     :UserType;
    team?     :TeamType;
    updatedAt :Date;
    createdAt :Date;
}