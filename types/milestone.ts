import { ContractType } from "./contract";

export type MilestoneType = {
    id: string
    title: string
    amount: number;
    contractId: string;
    description : string;
    dueDate: Date
    isPaid: boolean;
    deleted: { status: boolean, deletedAt: Date};
    contract: ContractType
    updatedAt: Date;
    createdt: Date;

}