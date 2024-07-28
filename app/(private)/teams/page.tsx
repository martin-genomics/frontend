import NewTeam from '@/components/teams/NewTeam'
import Teams from '@/components/teams/Teams'
import Profile from '@/components/user/Profile'
import ProfileLoader from '@/components/user/ProfileLoader'
import dynamic from 'next/dynamic'
import { unstable_serialize as infinite_unstable_serialize } from 'swr/infinite'
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
                    <Teams teams={[]} />
                </Suspense>
            </HomeLayout>
        </div>
    )
}