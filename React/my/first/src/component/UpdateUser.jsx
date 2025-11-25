import React from 'react'
import { useContext, useState } from 'react'
import { UserContext } from '../Usercontext'

const UpdateUser = () => {
    const {updateUser} = useContext(UserContext);
    const [newName, setNewName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(newName.trim()) {
            updateUser(newName.trim())
            setNewName('')

        }
    }
  return (
    <div>UpdateUser

        <h2>Update user Name</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter new name' value={newName} onChange={e => setNewName(e.target.value)}/>
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default UpdateUser