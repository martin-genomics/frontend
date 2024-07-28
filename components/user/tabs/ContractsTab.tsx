'use client'

import { useContracts } from "@/plugins/fetcher"
import TabLoader from "./TabLoader"


export default function ContractsTab() {

    const { contracts, isLoading, isError } = useContracts()
    
    if(isLoading) {

        return (
            <TabLoader />
        )
    }

    return (
        <div>
            <TabLoader/>
        </div>
    )
}