import Nav from '@/components/Nav'
import React from 'react'

const page = () => {
  return (
    <div className='text-white bg-black h-screen'>
      <Nav select='contact' />
      <div className='flex justify-center items-center h-[90%]'>
        About
      </div>
    </div>
  )
}

export default page