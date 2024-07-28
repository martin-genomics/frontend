'use client'



export default function ProfileLoader(){


    return (
        <div className="grid grid-cols-2 gap-y-4">
            <div className="col-span-2 flex justify-between">
                <div className="flex gap-8">
                {/* User Avatar */}
                <div className="w-40 h-40 border rounded-full animate-pulse bg-gradient-to-tr from-blue-gray-200 to-blue-gray-300 ">

                </div>
                <div className=" flex flex-col gap-8 mt-6">
                    <p className="flex flex-col gap-1">
                        {/* User Full Names */}
                        <span className="h-6 w-36 rounded-md animate-pulse bg-gradient-to-tr from-blue-gray-200 to-blue-gray-300"></span>
                        {/*Public Email  */}
                        <span className="h-6 w-3/5 rounded-md animate-pulse bg-gradient-to-tr from-blue-gray-200 to-blue-gray-300"></span>
                    </p>
                    
                    {/* Educational Record */}
                    <p className="h-6 w-full rounded-md animate-pulse bg-gradient-to-tr from-blue-gray-200 to-blue-gray-300">

                    </p>
                </div>
                </div>
                <div className="flex flex-col items-end gap-8">
                    {/* Monthly points */}
                    <div className="">
                        <div className="h-8 w-14 rounded-2xl border animate-pulse bg-gradient-to-tr from-blue-gray-200 to-blue-gray-300"></div>
                    </div>
                    {/* Profile options */}
                    <div className="flex gap-4">
                        {/* Profile Share */}
                        <div className="h-8 w-8 rounded-full border animate-pulse bg-gradient-to-tr from-blue-gray-200 to-blue-gray-300"></div>
                        {/* Profile visibility */}
                        <div className="h-8 w-8 rounded-full border animate-pulse bg-gradient-to-tr from-blue-gray-200 to-blue-gray-300"></div>
                        {/* Edit Profile */}
                        <div className="h-8 w-28 rounded-2xl border animate-pulse bg-gradient-to-tr from-blue-gray-200 to-blue-gray-300"></div>

                    </div>
                </div>
            </div>
            {/* Profile Tabs */}
            <div className="col-span-2 flex gap-4 justify-start">
                <div className="h-8 w-36 rounded-md animate-pulse bg-gradient-to-tr from-blue-gray-200 to-blue-gray-300">

                </div>
                <div className="h-8 w-36 rounded-md animate-pulse bg-gradient-to-tr from-blue-gray-200 to-blue-gray-300">

                </div>
                <div className="h-8 w-36 rounded-md animate-pulse bg-gradient-to-tr from-blue-gray-200 to-blue-gray-300">

                </div>
                <div className="h-8 w-36 rounded-md animate-pulse bg-gradient-to-tr from-blue-gray-200 to-blue-gray-300">

                </div>
                <div className="h-8 w-36 rounded-md animate-pulse bg-gradient-to-tr from-blue-gray-200 to-blue-gray-300">

                </div>
            </div>
            <div className="col-span-full flex gap-4">
                <div className="w-[70%] flex flex-col gap-4">
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
        </div>
    )
}