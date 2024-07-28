'use client'

import { Alert, Avatar, Badge, Button, Chip, IconButton, Input, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Tooltip, Typography } from "@material-tailwind/react"
import userPhoto from '@/public/user.jpg'
import { AlarmCheckIcon, CircleX, Eye, Mail, Pencil, Plus } from "lucide-react"
import { useSkills, useUser } from "@/plugins/fetcher";
import { useEffect, useState } from "react";
import { RiEyeFill, RiShieldStarLine } from "react-icons/ri";
import { UserType } from "@/types/user";
import ProfileLoader from "./ProfileLoader";
import ShareMenu from "./ShareMenu";
import Link from "next/link";
import SkillsTab from "./tabs/SkillsTab";
import EditProfileModal from "../Modals/EditProflleModal";
import ContractsTab from "./tabs/ContractsTab";




export default function Profile(){
    const [ isEditProfileModalOpen, setEditProfileModalOpen] = useState<boolean>(false)
    const { user, isLoading, isError } = useUser();

    if(isLoading) {
        return <ProfileLoader />
    }
    return (
        <>
        <EditProfileModal isOpen={isEditProfileModalOpen} setModalOpen={setEditProfileModalOpen} user={user}/>
        <div className="grid grid-cols-2 gap-y-4">
            <div className="col-span-2 flex justify-between">
                <div className="flex gap-8">
                {/* User Avatar */}
                <Avatar
                    src={userPhoto.src}
                    size='xxl'
                    className="h-40 w-40 ring-4 ring-primary"
                />
                <div className=" flex flex-col gap-8 mt-6">
                    <p className="flex flex-col gap-1">
                        {/* User Full Names */}
                        <Typography variant='lead'>{user.firstName} {user.lastName}</Typography>
                        {/*Public Email  */}
                        <Typography variant='small' className="flex gap-1"> <Mail /> {user.email}</Typography>
                    </p>
                    
                    {/* Educational Record */}
                    <p className="">
                        {
                            user.membership === 'basic'?
                            <Badge containerProps={{ className: 'bg-yellow-400 p-2 flex gap-1'}} content={<span >Upgrade</span>} >
                                <span className=" font-semibold uppercase">
                                    {user.membership}
                                </span>
                                <span>
                                    membership
                                </span>
                            </Badge>
                            :
                            <div className='bg-yellow-400 p-2 flex gap-1'>
                                <span className=" font-semibold uppercase">
                                    {user.membership}
                                </span>
                                <span>
                                    membership
                                </span>
                            </div>

                        }
                    </p>
                </div>
                </div>
                <div className="flex flex-col items-end gap-8">
                    {/* Monthly points */}
                    <div className="">
                        <Tooltip 
                            content={`You have earned 10 points`} 
                            placement='left'
                            
                            >
                            <IconButton size="lg" variant="text" className="">
                                    <RiShieldStarLine size={24} className="text-primary"/>
                                    <span>10</span>
                            </IconButton>
                        </Tooltip>
                    </div>
                    {/* Profile options */}
                    <div className="flex gap-4">
                        {/* Profile Share */}
                        <ShareMenu link={user.id} />
                        {/* Profile visibility */}
                        <Link href={'/dashboard/profile/preview'}>
                            <IconButton  size="sm" variant='outlined' className="rounded-full">
                                <RiEyeFill size={16}  />
                            </IconButton>
                        </Link>
                        {/* Edit Profile */}
                        <Button onClick={ () => setEditProfileModalOpen(true)} size='sm' variant="filled" className="w-32 normal-case flex gap-2 bg-primary text-white font-normal rounded-2xl">
                            <Pencil size={16} />
                            <span>
                                Edit Profile
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
            {/* Profile Tabs */}
            <div className="col-span-2 flex gap-4 justify-start">
                <Tabs value='experience' className='mt-5 w-full' >
                    <TabsHeader 
                        className="gap-10"
                        indicatorProps={{
                            className: 'bg-primary text-white',
                        }}
                        >
                        <Tab activeClassName="text-white" value='about'>
                            About
                        </Tab>
                        <Tab activeClassName="text-white" value='skills'>
                            Skills
                        </Tab>
                        <Tab activeClassName="text-white" value='experience'>
                            Experience
                        </Tab>
                        <Tab activeClassName="text-white" value='education'>
                            Education
                        </Tab>
                        <Tab activeClassName="text-white" value='contracts'>
                            Contracts
                        </Tab>
                        <Tab activeClassName="text-white" value='clients'>
                            Clients
                        </Tab>
                    </TabsHeader>
                    <TabsBody
                        animate={{
                            initial: {y: 250},
                            mount: { y: 0},
                            unmount: { y: 250 }
                        }}
                    >
                        <TabPanel value={'about'}>
                            <Typography variant='h6'>
                                About
                            </Typography>
                            <p className="font-body">
                                    The five boxing wizards jump quickly.
        Sympathizing would fix Quaker objectives.
        Many-wived Jack laughs at probes of sex quiz.
        Turgid saxophones blew over Mick's jazzy quaff.
        Playing jazz vibe chords quickly excites my wife.
        A large fawn jumped quickly over white zinc boxes.
        Exquisite farm wench gives body jolt to prize stinker.
        Jack amazed a few girls by dropping the antique onyx vase!
                            </p>
                        </TabPanel>
                        <TabPanel value={'skills'}>
                            <SkillsTab />
                        </TabPanel>
                        <TabPanel value={'experience'}>
                            Desc
                        </TabPanel>
                        <TabPanel value={'education'}>
                            Desc
                        </TabPanel>
                        <TabPanel value={'contracts'}>
                            <ContractsTab />
                        </TabPanel>
                        <TabPanel value={'clients'}>
                            Desc
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </div>
  
        </div>
        
        </>
    )
}