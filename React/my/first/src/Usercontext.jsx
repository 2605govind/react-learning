import { createContext, use, useState } from "react"

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState({name: "govind"})

    const updateUser = (newName) => {
        setUser({name: newName})
    }

    return <UserContext.Provider value={{user, updateUser}}>
        {children}
    </UserContext.Provider>
}



export {UserProvider, UserContext};
