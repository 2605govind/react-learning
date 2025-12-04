import React from 'react'

const page = async ({params}) => {
    // const username = await params.username; // wrong
    const { username } = await params
  return (
    <div>dynamic profile page username: {username}</div>

  )
}

export default page