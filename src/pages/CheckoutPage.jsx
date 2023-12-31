import React from 'react'
import { PageHero, StripeCheckout } from '../components'
import { styled } from 'styled-components'

//extra import
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'


const Checkout = () => {
  const {cart} = useCartContext()
  return (
    <main>
      <PageHero title='checkout'/>
      <Wrapper className='page'>
        {cart.length < 1 ? <div className='empty'>
          <h2>car empty</h2>
          <Link to='/products' className='btn'>
            fill
          </Link>
        </div> : <StripeCheckout/>}
        
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
.empty{
  text-align: center;
}
`

export default Checkout