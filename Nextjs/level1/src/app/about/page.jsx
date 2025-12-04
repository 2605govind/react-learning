import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div>
      <h2>about page</h2>



      {/* <Image src={'/vercel.svg'} alt='vercel' width={200} height={200}/> */}
      <Image src={'https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/gettyimages-1390815938?_a=BAVAZGID0'} alt='vercel' width={200} height={200}/>
    </div>
  )
}

export default page