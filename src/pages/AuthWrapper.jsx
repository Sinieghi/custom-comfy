import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import styled from 'styled-components'


const AuthWrapper = ({children}) => {
  const {isLoading,error} = useAuth0()
  if(isLoading){
    return <Warapper>
      <h1>Loading...</h1>
    </Warapper>
  }
  if(error){
    return (
    <Warapper>
      <h1>{error.message}</h1>
    </Warapper>
  )
  }
  return <>{children}</> 
  
}

const Warapper = styled.section`
min-height: 100vh;
display: grid;
place-items: center;
`

export default AuthWrapper