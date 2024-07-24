'use client'
import { MoonLoader } from "react-spinners";



export default function GlobalLoader(){


    return (
        <div className="fixed w-full h-screen flex flex-col items-center justify-center dark:bg-slate-700">
            <MoonLoader size={32} />
        </div>
    )
}