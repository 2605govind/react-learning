'use client'
import Nav from '@/components/Nav';
import { useParams } from 'next/navigation';
import React from 'react'

const page = () => {
    // const { place } = await params;
    const {place} = useParams()
    return (
        <div className='text-white bg-black h-screen'>
            <Nav select='destinations' />
            <div className='flex justify-center items-center h-[90%]'>
                {place}
            </div>
        </div>
    )
}

export default page