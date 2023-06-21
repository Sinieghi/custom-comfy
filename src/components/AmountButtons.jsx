import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { styled } from 'styled-components'

const AmountButtons = ({amount, decrease, increase, stock}) => {
  return (
    <Wrapper className='amount-btsn'>
      {amount === stock ? null : <button onClick={increase} className='amount-btn'><FaPlus/></button> }
      <h2 className='amount'>{amount}</h2>
      {amount === 1 ? null : <button onClick={decrease} className='amount-btn'><FaMinus/></button>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: grid;
width: 140px;
justify-content: center;
grid-template-columns: repeat(3, 1fr);
align-items: center;
h2{
  margin-bottom: 0;
}
button{
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  padding: 1rem 0;
  width: 2rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
h2{
  margin-bottom: 0;
}
`

export default AmountButtons