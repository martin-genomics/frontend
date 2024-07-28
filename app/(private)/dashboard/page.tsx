import dynamic from 'next/dynamic'

const HomeLayout = dynamic(
  () => import('@/components/Layouts/HomeLayout'),
  { ssr: false }
)



export default function Page() {

    return (
        <div>
            <HomeLayout>
                <div>
                    hi
                </div>
            </HomeLayout>
        </div>
    )
}