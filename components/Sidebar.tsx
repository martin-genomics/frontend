'use client'

import { Dispatch, SetStateAction, useState } from "react";
import { 
    Button,
    Drawer,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { RiAddCircleLine, RiArrowDownSLine, RiArrowRightSLine, RiFileAddLine, RiFileCopy2Line, RiHomeLine, RiSettings2Line, RiTeamLine } from "react-icons/ri";



type SidebarProps = {
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
    const [contractCollapse, setContractCollapse] = useState<boolean>(true)
    const [teamsCollapse, setTeamsCollapse] = useState<boolean>(true)


    return (
        
            <Drawer
                    placement='left'
                    open={sidebarOpen}
                    // onClose={closeDrawerTop}
                    className="p-4 border-r"
                    overlay={false}
        >
            <Typography variant='h4' className="text-primary font-extrabold">
                HireTops
            </Typography>
            <ul className="flex flex-col items-start gap-2 w-full">
                
                <li className="w-full mt-3">
                    <Link href={'/dashboard'} className="w-full">
                    
                        <Button variant='text' fullWidth className="flex gap-2 bg-inherit text-inherit hover:bg-primary rounded-md p-2 hover:text-white font-semiboard normal-case">

                                <RiHomeLine className="" size={24}/>
                                <span className="mt-2">Dashboard</span> 
                        </Button>
                    </Link>
                </li>

                <li className="w-full">

                    <Accordion open={contractCollapse}>

                        <AccordionHeader  onClick={()=> setContractCollapse(!contractCollapse)} className="text-sm justify-start mx-2">
                            <span className="text-black font-medium ">
                                Contract Management
                            </span>
                            {
                                contractCollapse?
                            <RiArrowDownSLine className="" size={24}/>
:
                            <RiArrowRightSLine className="" size={24}/>

                            }
                        </AccordionHeader>
                        <AccordionBody >
                            <ul className="ml-5">
                                <li>
                                    <Link href={'/contracts/new-contract'} className="w-full">
                        
                                        <Button variant='text' fullWidth className="flex gap-2 bg-inherit text-inherit hover:bg-primary rounded-md p-2 hover:text-white font-semiboard normal-case">

                                                <RiFileAddLine className="" size={24}/>
                                                <span className="mt-1">New Contract</span> 
                                        </Button>
                                    </Link>
                                </li>

                                <li>
                                    <Link href={'/contracts'} className="w-full">
                        
                                        <Button variant='text' fullWidth className="flex gap-2 bg-inherit text-inherit hover:bg-primary rounded-md p-2 hover:text-white font-semiboard normal-case">

                                                <RiFileCopy2Line  className="" size={24}/>
                                                <span className="mt-1">My Contracts</span> 
                                        </Button>
                                    </Link>
                                </li>

                                <li>
                                    <Link href={'/contracts/manage'} className="w-full">
                        
                                        <Button variant='text' fullWidth className="flex gap-2 bg-inherit text-inherit hover:bg-primary rounded-md p-2 hover:text-white font-semiboard normal-case">

                                                <RiSettings2Line  className="" size={24}/>
                                                <span className="mt-1">Manage</span> 
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </AccordionBody>
                    </Accordion>
                </li>

                
                <li className="w-full">
  
                    <Accordion open={teamsCollapse}>

                        <AccordionHeader  onClick={()=> setTeamsCollapse(!teamsCollapse)} className="text-sm justify-start mx-2">
                            <span className="text-black font-medium ">
                                Teams
                            </span>
                        {
                                teamsCollapse?
                            <RiArrowDownSLine className="" size={24}/>
:
                            <RiArrowRightSLine className="" size={24}/>

                            }
                        </AccordionHeader>
                        <AccordionBody >
                            <ul className="ml-5">
                                <li>
                                    <Link href={'/teams/new'} className="w-full">
                        
                                        <Button variant='text' fullWidth className="flex gap-2 bg-inherit text-inherit hover:bg-primary rounded-md p-2 hover:text-white font-semiboard normal-case">

                                                <RiAddCircleLine className="" size={24}/>
                                                <span className="mt-1">New Team</span> 
                                        </Button>
                                    </Link>
                                </li>

                                <li>
                                    <Link href={'/teams'} className="w-full">
                        
                                        <Button variant='text' fullWidth className="flex gap-2 bg-inherit text-inherit hover:bg-primary rounded-md p-2 hover:text-white font-semiboard normal-case">

                                                <RiTeamLine  className="" size={24}/>
                                                <span className="mt-1">My Teams</span> 
                                        </Button>
                                    </Link>
                                </li>

                                <li>
                                    <Link href={'/teams/manage'} className="w-full">
                        
                                        <Button variant='text' fullWidth className="flex gap-2 bg-inherit text-inherit hover:bg-primary rounded-md p-2 hover:text-white font-semiboard normal-case">

                                                <RiSettings2Line  className="" size={24}/>
                                                <span className="mt-1">Manage</span> 
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </AccordionBody>
                    </Accordion>
                </li>

                

                


            </ul>
            </Drawer>
    )
}