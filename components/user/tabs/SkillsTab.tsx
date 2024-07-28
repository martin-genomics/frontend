'use client'

import { useCategories, useSkills } from "@/plugins/fetcher"
import { Button, Chip, Input, Typography } from "@material-tailwind/react"
import { CircleX, Plus } from "lucide-react"
import { useEffect } from "react"



const Loader = () => (
    <div>
        hi
    </div>
)


export default function SkillsTab() {
    const { skills, isSkillsLoading, isError } = useSkills()
    const { categories, isCategoryLoading } = useCategories()


    useEffect(()=> {
        console.log(skills, categories)
    }, [])

    if(isCategoryLoading && isSkillsLoading) {
        return <Loader />
    }

    return (
        <div>

            <Typography variant='h6'>
                                    Categories
            </Typography>
            <div className="my-5 grid grid-cols-3 gap-y-1 gap-x-1">
                {
                    categories.map( (value: {id: string, name: string}, index: number)=> (
                        <Chip 
                            key={value.id} 
                            value={value.name} 
                            variant='filled' 
                            className="w-max rounded-3xl normal-case bg-primary text-white" 
                            icon={<CircleX size={16} onClick={()=> {alert(value.id)}} />}/>
                    ))
                }

            </div>

            <Typography variant='h6'>
                                    My Skiils
            </Typography>
            <div className="my-5 grid grid-cols-3 gap-y-1 gap-x-1">
                {
                    skills.map( (value: {id: string, name: string}, index: number)=> (
                        <Chip 
                            key={value.id} 
                            value={value.name} 
                            variant='filled' 
                            className="w-max rounded-3xl normal-case bg-primary text-white" 
                            icon={<CircleX size={16} onClick={()=> {alert(value.id)}} />}/>
                    ))
                }

            </div>

            <form  className="w-max flex gap-1">
                <Input color="pink" variant='outlined' label="Enter new skill"/>
                <Button loading  type='submit' className="bg-primary w-max">
                    <Plus size={16}/>
                </Button>

            </form>


        
        </div>
    )
}