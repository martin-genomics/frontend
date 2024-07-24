'use client'
import { MoonLoader } from "react-spinners";
import { useForm, useFormContext } from "react-hook-form";
import { Button, Card, CardBody, CardFooter, CardHeader, Carousel, Input } from "@material-tailwind/react";
import Link from "next/link";
import { IconButton } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";


import login1 from "@/public/auth/login1.png";
import login2 from "@/public/auth/login-img-1.webp";
import login3 from "@/public/auth/login-img-6.webp";
import login4 from "@/public/auth/login-img-5.webp";
import wave from "@/public/auth/wave.png";
import { useState } from "react";




export default function Login(){
    const [isLoading, setLoading] = useState<boolean>(false)
    // const { getFieldState, getValues } = useFormContext();
    const form = useForm()

    return (
        <div className="w-full h-screen flex items-center flex-col justify-center bg-[url('../public/auth/bg.png')] bg-cover">
            <div className="grid grid-cols-2 px-5 gap-x-4 py-10 rounded-md w-[900px] shadow-2xl border border-gray-100 bg-white ">
                <div className=" rounded-tr-[20%] rounded-bl-[20%] md:h-[500px] scale-110 w-[90%]">
                <Carousel
                    autoplay
                    loop
                    className=" scrollbar-hide"
                    nextArrow={undefined}

                >
       
       <Card className="mx-auto rounded-md bg-white w-[300px] pt-[1px] scale-90 mt-24">
                        <CardBody>
                        <Image 
                            width={203}
                            height={100}
                            className="h-[300px] w-full mx-auto  rounded-m"
                            src={login3}
                            alt={login1.src}
                        />
                        </CardBody>
                        <CardFooter>
                           <ul>
                                
                                <li className="text-center">
                                Transform How You Work
                                </li>
                            </ul>
                        </CardFooter>
                    </Card>
                           
       <Card className="mx-auto rounded-md bg-white w-[300px] pt-[1px] scale-90 mt-24">
                        <CardBody>
                        <Image 
                            width={203}
                            height={100}
                            className="h-[300px] w-full mx-auto  rounded-m"
                            src={login2}
                            alt={login1.src}
                        />
                        </CardBody>
                        <CardFooter>
                           <ul>
                                
                                <li className="text-center">
                                Transform How You Work
                                </li>
                            </ul>
                        </CardFooter>
                    </Card>


   


                </Carousel>

                </div>
                <div className="flex flex-col gap-7">
                    <div>
                        <p className="text-sm flex gap-1">
                            <Image 
                                alt={wave.src}
                                src={wave}
                                width={32}
                                height={32}

                            />
                            
                                <span className="my-1">
                                Hi, HireToper
                                </span>
                                </p>
                        <h3 className="font-medium">
                            Welcome back to HireTops
                        </h3>
                    </div>
  
                    {/* External Loginn */}
                    
                    <div className="flex flex-col">
                        <Button variant='outlined' fullWidth className="flex items-center justify-between p-[6px]" >
                            <FcGoogle size={24} className="my-[1px]" />
                            <span className="normal-case w-[100%] font-body text-gray-700">
                                Continue with Google
                            </span>
                        </Button>
                    </div>
                    <div className="flex text-sm mx-auto  ">
                        <hr className="w-28 my-3.5 mx-1 border-[1.5px] border-dashed border-gray-400" />
                        <span className="my-1 text-gray-400">or login with email</span>
                        <hr className="w-28 my-3.5 mx-1 border-[1.5px] border-dashed border-gray-400" />
                    </div>
                    {/* Login form */}
                    <form className="grid grid-cols-1 gap-4">
                        
                        <Input  type='email' label="Email Address" size="lg"  className="h-[3.5em]" />
                        <Input type='password' label="Password" size='lg' className="h-[3.5em]"/>
                        <p>
                            <Link href={'/forgot-password'}>
                                <span className="text-sm text-blue-400">
                                    Forgot password?
                                </span>
                            </Link>
                        </p>
                        {isLoading?
                        <MoonLoader size={32} className="mx-auto" />
                        :

                        <Button size='md' className="normal-case font-medium bg-primary">
                            Login
                        </Button>
                        }

                    </form>
                    <Button variant='outlined' className="rounded-3xl flex justify-center gap-2 normal-case ">
                            Don't have an account? <span className="text-blue-400">Sign Up</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}