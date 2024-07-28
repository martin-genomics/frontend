'use client'


import { Avatar, Badge, IconButton } from "@material-tailwind/react";
import { Dispatch, SetStateAction, useState } from "react";
import { RiBellLine, RiMessage3Line, RiSearch2Line } from "react-icons/ri";
import { GoBell } from "react-icons/go";
import Image from "next/image";
import ProfileMenu from "@/components/user/ProfileMenu";
import Breadcrumbs from "./Layouts/Breadcrumbs";


type SidebarProps = {
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>
}


export default function Header({ sidebarOpen, setSidebarOpen }: SidebarProps) {

    return (
        <div className="fixed w-full z-[99] ">
            <header className=" border flex justify-between bg-white dark:bg-blue-gray-900">
                <div className="ml-[22%] flex justify-end">
                    <Breadcrumbs />
                </div>
                <div>
                    <ul className="flex gap-x-3 ">
                        <li>
                            <IconButton variant='text' className="mt-3">
                                <RiSearch2Line  size={24}/>
                            </IconButton>
                        </li>
                        <li>
                            <IconButton variant='text' className="mt-3">
                                <GoBell size={24}/>
                            </IconButton>
                        </li>
                        <li className="mt-3">
                            <Badge content={5} >
                            <IconButton variant='text' className="">
                                <RiMessage3Line size={24}/>
                            </IconButton>
                            </Badge>

                        </li>

                            
                        <ProfileMenu />
                

                    </ul>
                </div>
            </header>
        </div>
    )
}