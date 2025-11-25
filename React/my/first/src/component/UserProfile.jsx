import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Usercontext'

const UserProfile = () => {
    const {user, updateUser} = useContext(UserContext);

    return (
        <div>UserProfile
            
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
        </div>
    )
}

export default UserProfile