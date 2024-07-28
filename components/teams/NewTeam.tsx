'use client'

import { APIForm } from "@/plugins/forms";
import { Avatar, Button, Input, Option, Select, Typography } from "@material-tailwind/react";
import { Clock1 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcCameraAddon } from "react-icons/fc";



type FormValues = {
    name: string
    logo: any;
    coverImage: any;
    teamSize: string;
    minimumProjectSize: string;
    location: string;
    yearFounded: Date
}


export default function NewTeam() {

    const router = useRouter();

    const [coverImage, setCoverImage] = useState<File | null >(null);
    const [coverImageUrl, setCoverImageUrl] = useState('');
    const [logo, setLogo] = useState<File | null >(null);
    const [logoUrl, setLogoUrl] = useState('');
    const [isLoading, setLoading ] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState,
        setValue
    } = useForm<FormValues>();

    const submitForm = async (form: FormValues) => {
        setLoading(true)
        try {
            
            form.coverImage = coverImage;
            form.logo = logo;
            console.log(form)
            const team = await APIForm.createTeam(form);
            setLoading(false)
            toast('Team created')
            router.push('/team/members/new?teamId='+team.id.toString(), {
                
            })
        } catch(error){
            console.log(error)
            setLoading(false)

        }
    }

    return (
        <div className="flex mt-5 w-full gap-3">
            <div className=" flex flex-col gap-4 w-[70%] h-svh">
                <div className=" flex justify-start gap-2 p-5 shadow rounded-md">
                    <Clock1 className="text-gray-600" />
                    <Typography variant='lead' className="text-md" color='gray'>
                        New Team
                    </Typography>
                </div>

                <div>
                    <form onSubmit={handleSubmit(submitForm)} className="grid md:grid-cols-2 gap-4 mb-5">
                        <Input {...register('name', { required: true})} type="text" className="col-span-2" label="Team Name" shrink size='lg' containerProps={{ className: 'col-span-2' }} />
                        <Input {...register('location', { required: true})} type="text" className="col-span-2" label="Location" shrink size='lg' containerProps={{ className: 'col-span-2' }} />
                        <Input {...register('yearFounded', { required: true})} type='date' className="col-span-2" label="Year Founded" shrink size='lg' containerProps={{ className: 'col-span-2' }}/>
                        <Typography variant='small' className="col-span-2">
                            Other options
                        </Typography>
                        <Select onChange={ value => setValue('teamSize', value as string) } className=" col-span-2" label="Team Size"  size='lg' >
                            <Option value="2-10">2-10 Members</Option>
                            <Option value="11-50">11-50 Members</Option>
                            <Option value="51-100">51-100 Members</Option>
                            <Option value="101-200">101-200 Members</Option>
                            <Option value="201-500">201-500 Members</Option>
                            <Option value="500+">500+ Members</Option>
                        </Select>
                        <Select onChange={ value => setValue('minimumProjectSize', value as string) }   className=" col-span-2" label="Minimum Project Size"  size='lg' >
                            <Option value="1K+">1K+</Option>
                            <Option value="5K+">5K+</Option>
                            <Option value="10K+">10K+</Option>
                            <Option value="20K+">20K+</Option>
                            <Option value="50K+">50K+</Option>
                        </Select>
                        <Typography variant='small' className="col-span-2">
                            Media - logo & cover
                        </Typography>
                        <Typography variant='small' className="col-span-2">
                            Logo
                        </Typography>
                        <label onDropCapture={(event => { alert(event)})} onDrop={(event => { alert(event)})} className="border-2 border-dashed rounded-md flex flex-col items-center justify-center">
                            <FcCameraAddon  size={30}/>
                            Click or drop your logo here
                            <Input 
                                type='file' 
                                label="Team logo" 
                                variant='static' 
                                className="hidden" 
                                containerProps={{className: 'hidden'}}
                                onChange={(event)=> {
                                    if(event.target.files && event.target.files[0]) {
                                        const file = event.target.files[0];
                                        setLogo(file);
                                        setLogoUrl(URL.createObjectURL(file));
                                    }
                                }}
                                accept="image/*"
                                />
                        </label>

                        <Avatar src={logoUrl} loading='lazy' size='xxl' className="w-40 h-40  mx-auto "  />
                        <Typography variant='small' className="col-span-2">
                            Team Cover
                        </Typography>
                        
                        <label onDrop={(event => { alert(event)})} className="border-2 border-dashed rounded-md flex flex-col items-center justify-center">
                            <FcCameraAddon  size={30}/>
                            Click or drop team cover here
                            <Input 
                                type='file' 
                                label="Team logo" 
                                variant='static' 
                                className="hidden" 
                                containerProps={{className: 'hidden'}}
                                onChange={(event)=> {
                                    if(event.target.files && event.target.files[0]) {
                                        const file = event.target.files[0];
                                        setCoverImage(file);
                                        setCoverImageUrl(URL.createObjectURL(file));
                                    }
                                }}
                                accept="image/*"
                                />
                        </label>

                        <Avatar src={coverImageUrl} size='xxl'  className="w-[250px] h-60 mx-auto" variant='rounded' />

                        <Button type="submit" loading={isLoading} className=" col-end-3 my-5  rounded-md normal-case">
                            {isLoading? 'Creating team': 'Submit'}
                        </Button>
                    </form>
                </div>
            </div>
            <div className="border w-[30%] grid gap-2 grid-cols-1">
                <div className=" mx-5 my-5 rounded-md bg-gray-100">

                </div>
                <div className=" mx-5 my-5 rounded-md bg-gray-100">

                </div>
            </div>
        </div>
    )
}