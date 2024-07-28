'use client'



export default function TabLoader(){
 
    return (
        <div className=" w-full flex gap-4">
        <div className="w-[100%] flex flex-col gap-4">
            <div className="h-36 rounded-md animate-pulse bg-blue-gray-100 from-blue-gray-100 ">

            </div>
            <div className="h-36 rounded-md animate-pulse bg-blue-gray-200 from-blue-gray-200 to-blue-gray-300">

            </div>

        </div>
        <div className="w-[30%] flex flex-col gap-4">
            <div className=" w-[100%] h-36 rounded-md animate-pulse bg-gradient-to-tr from-blue-gray-200 to-blue-gray-300">

            </div>
            <div className=" w-[100%] h-36 rounded-md animate-pulse bg-gradient-to-tr from-blue-gray-200 to-blue-gray-300">

            </div>
        </div>
    </div>
    )
}