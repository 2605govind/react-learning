import React from 'react'
import Nav from '../components/Nav'

const page = () => {
  return (
    <div className='text-white bg-black h-screen'>
      <Nav select='home'/>
      <div className='flex justify-center items-center h-[90%]'>
        <p className='text-[40px]'>Welcom To Our Travel Guide Website</p>
      </div>
    </div>
  )
}

export default page