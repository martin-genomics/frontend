'use client';

import axios from "axios";
import useSWR from "swr";
import { UserType } from "@/types/user";
import { ContractType } from "@/types/contract";
import { TeamType } from "@/types/team";

const fetcher = (url: string) => fetch(url, { cache: 'force-cache'}).then((res) => res.json());

export const useUser = () => {
    const { data, error, mutate, isLoading} = useSWR('/api/user', fetcher);
        console.log('test case: ',data, error, mutate, isLoading )
        const user: UserType = data;
        return {
            user:user,
            isLoading: isLoading,
            isError: error 
        }
    
}


export const useSkills = () => {
    const { data, error, mutate, isLoading} = useSWR('/api/user/skills', fetcher, { refreshInterval: 7200});
    console.log(data)
    const skills: any = data;
    return {
        skills:skills,
        isSkillsLoading: isLoading,
        isError: error 
    }
}

export const useCategories = () => {
    const { data, error, mutate, isLoading} = useSWR('/api/user/categories', fetcher, { refreshInterval: 100, shouldRetryOnError: true});
    console.log(data, isLoading, error, mutate)
    const categories: any = data;
    return {
        categories:categories,
        isCategoryLoading: isLoading,
        isError: error 
    }
}



export const useContracts = () => {
    const { data, error, mutate, isLoading} = useSWR('/api/contracts', fetcher);
    console.log(data, isLoading, error, mutate)
    const contracts: ContractType[] = data;
    return {
        contracts:contracts,
        isLoading: isLoading,
        isError: error 
    }
}


export const useTeams = () => {
    const { data, error, mutate, isLoading} = useSWR('/api/teams', fetcher, { refreshInterval: 1, refreshWhenOffline: false});
    const teams: any = data
    console.log(teams)
    return {
        teams:teams,
        isLoading: isLoading,
        isError: error 
    }
}