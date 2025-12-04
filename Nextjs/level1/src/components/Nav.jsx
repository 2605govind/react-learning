import React from 'react'
import globe from '../../public/globe.svg'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='h-[100px] w-full flex justify-center items-center bg-white-600'>
        <div> <Image src={globe} alt={"logo"}/> Travel Guide</div>
        <div>
                <Link href={'/'}>Home</Link>
                <Link href={'/destinations'}>Destinations</Link>
                <Link href={'/contactus'}>Contact Us</Link>
        </div>
    </div>
  )
}

export default Nav