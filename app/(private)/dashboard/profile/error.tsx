'use client' // Error components must be Client Components
 
import HomeLayout from '@/components/Layouts/HomeLayout'
import { Button } from '@material-tailwind/react'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error, 'my error')
  }, [error])
 
  return (
    <HomeLayout>

    <div className='flex flex-col items-center justify-center h-screen '>
      <h2>Something went wrong!</h2>
      <Button
      variant='text'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
    </HomeLayout>
  )
}