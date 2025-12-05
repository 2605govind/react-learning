'use client'

import React, { useEffect } from "react";

export default function Home() {
  /// SSR
  // let response = await fetch('http://localhost:3000/api/user', {
  //   cache: 'no-store'
  // })
  // let data = await response.json();
  // console.log(data)
  
  
  // SSG
  // let response = await fetch('http://localhost:3000/api/user', {
  //   cache: 'force-cache'
  // })
  // let data = await response.json();
  // console.log(data)

  // ISR
  // let response = await fetch('http://localhost:3000/api/user', {
  //   next: {revalidate:5} // 5 second
  // })
  // let data = await response.json();
  // console.log(data)
  
  
  
  // client side rendering
  const handleAPI = async () => {
    let response = await fetch('/api/user')
    let data = await response.json();
    console.log(data)
  }

  useEffect(() => {
    handleAPI()
  },[])

  return (
    <div>

    Page
    </div>
  );
}
