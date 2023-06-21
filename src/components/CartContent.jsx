import React from 'react'
import { useCartContext } from '../context/cart_context'
import { styled } from 'styled-components'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import CartTotals from './CartTotals'


const CartContent = () => {
  const {cart, clearCart} = useCartContext()
  return (
    <Wrapper className='section section-center'>
      <CartColumns/>
      {
        cart.map((item)=>{
          return <CartItem key={item.id}  {...item}/>
        })
      }
      <hr />
      <div className="link-container">
        <Link to='/products' className='link-btn'>
          continue shopping
        </Link>
        <button className="link-btn clear-btn" type='button' onClick={clearCart}>
          clear cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  )
}
const Wrapper = styled.section`

`
export default CartContent