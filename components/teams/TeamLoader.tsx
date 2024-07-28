'use client'

import { Input, Select, Typography,Option } from "@material-tailwind/react"



export default function TeamsLoader(){

    return (
        <div className="mt-5 grid grid-cols-2 gap-y-2">
                <div className=" col-span-full border-b flex justify-start gap-2 p-5 shadow rounded-md">
                    <Typography variant='lead' className="text-md" color='gray'>
                        All teams
                    </Typography>
                </div>
                <div className="">
                    <ul className="w-full flex gap-4 my-5">
                        <li>All teams</li>
                        <li>Active Teams</li>
                        <li>Inactive Teams</li>
                    </ul>
                </div>

                <div className="col-span-full flex justify-between ">
                    <form className="w-96">
                        <Input variant='outlined' label="Search team" />
                    </form>
                    <div>
                        <Select 
                            variant='outlined' 
                            label="Sort by"  
                            containerProps={{
                                className:"rounded-md"
                            }}
                            >
                            <Option value="active">Active</Option>
                            <Option value="inactive">Inactive</Option>
                            <Option value="mostActivity">Most Activity</Option>
                            <Option value="lessActivity">Less Activity</Option>
                            <Option value="A-z">A-z</Option>
                            <Option value="z-A">z-A</Option>
                        </Select>
                    </div>
                    

                </div>
                <div className='col-span-full mt-5'>
                    <div className="w-[80%] flex flex-col gap-4">
                        {
                            [1, 2, 3, 4].map((value, index: number)=>(

                                <div key={index} className="flex gap-3">
                                    <div className="w-60 h-40 bg-gray-300 animate-pulse rounded-lg">

                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <div className="bg-gray-300 animate-pulse h-8 w-80 rounded-md "></div>
                                        <div className="bg-gray-300 animate-pulse h-8 w-3/5 rounded-md "></div>
                                        <div className="flex gap-2 w-full justify-between mt-10">
                                            <div className="bg-gray-300 animate-pulse h-8 w-3/5 rounded-md "></div>
                                            <div className="bg-gray-300 animate-pulse h-8 w-3/5 rounded-md "></div>
                                            <div className="bg-gray-300 animate-pulse h-8 w-3/5 rounded-md "></div>

                                        </div>
                                    </div>
                                </div>
                            ) )
                        }
                    </div>
                </div>
        </div>
    )
}