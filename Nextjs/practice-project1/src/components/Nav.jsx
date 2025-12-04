"use client"
import React, { useState } from 'react'
import globe from '../../public/globe.svg'
import Link from 'next/link'
import Image from 'next/image'

const Nav = ({select}) => {

  return (
    <nav>
      <div className='text-black px-10 py-2 w-full flex justify-between items-center bg-gray-100'>
        <div className='flex justify-between items-center'> <Image src={globe} alt={"logo"}/> Travel Guide</div>
        <div>
                <Link className={`${select === "home" && "text-blue-500"}`}  href={'/'}>Home</Link>
                <Link className={`${select === "destinations" && "text-blue-500"} pl-2`} href={'/destinations'}>Destinations</Link>
                <Link className={`${select === "contact" && "text-blue-500"} pl-2`} href={'/contact'}>Contact Us</Link>
        </div>
    </div>
    </nav>
  )
}

export default Nav