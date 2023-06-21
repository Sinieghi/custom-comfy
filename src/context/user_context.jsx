import { useAuth0 } from '@auth0/auth0-react'
import React, { createContext, useContext, useEffect,  useState } from 'react'
const AppContext = createContext()

const UserContext = ({children}) => {
  const { loginWithRedirect, logout, user, error } = useAuth0()
  const [myUser, setMyUser] = useState(null)

  useEffect(() => {
    setMyUser(user)
  }, [user])

  return (
    <AppContext.Provider value={{myUser,loginWithRedirect,logout}}>
{children}
    </AppContext.Provider>
  )
}
export const useUserContext = ()=>{
  return useContext(AppContext)
}
export default UserContext