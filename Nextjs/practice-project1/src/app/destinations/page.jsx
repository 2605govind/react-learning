'use client'
import Nav from '@/components/Nav'
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();
  return (
    <div className='text-white bg-black h-screen'>
      <Nav select='destinations'/>
      <div className='flex justify-center items-center h-[90%]'>
        <div className='flex flex-col items-center'>
            <h2 className='mb-5 text-xl'>Choose Your Destination</h2>
            <button onClick={() => router.push('/destinations/paris') } className='px-15 py-5 mt-4 bg-white text-black rounded-lg'>Paris</button>
            <button onClick={() => router.push('/destinations/tokyo') } className='px-15 py-5 mt-4 bg-white text-black rounded-lg'>Tokyo</button>
            <button onClick={() => router.push('/destinations/newyork') } className='px-15 py-5 mt-4 bg-white text-black rounded-lg'>NewYork</button>
        </div>
      </div>
    </div>
  )
}

export default page