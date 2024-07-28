import NewTeam from '@/components/teams/NewTeam'
import Profile from '@/components/user/Profile'
import ProfileLoader from '@/components/user/ProfileLoader'
import dynamic from 'next/dynamic'

const HomeLayout = dynamic(
  () => import('@/components/Layouts/HomeLayout'),
  { ssr: false }
)

import { Suspense } from 'react'


 

export default function Page( ) {

 
    return (
        <div>
            <HomeLayout>
                <Suspense fallback={<ProfileLoader />} >
                    New Members
                </Suspense>
            </HomeLayout>
        </div>
    )
}