import React from 'react'
import { useCartContext } from '../context/cart_context'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CartContent from '../components/CartContent'

const Cart = () => {
  const {cart} = useCartContext()
  if(cart < 1){
    return <Wrapper className='page-100'>
      <h2>Empty cart</h2>
      <Link to='/products' className='btn' >fill</Link>
    </Wrapper>
  }
  return (
    <main>
      <PageHero title='cart'/>
      <Wrapper className='page'>
        <CartContent />
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
 .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`
export default Cart