import React from 'react'
import {styled} from 'styled-components'
const Logo = () => {
  return (
    <Wrapper>
        <span>Rota</span>Desconhecida
    </Wrapper>
  )
}

const Wrapper = styled.h3`
margin-bottom: 0;
color: var(--grey-1);
span{
    color: var(--clr-primary-5);
}
`
export default Logo