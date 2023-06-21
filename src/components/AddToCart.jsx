import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import AmoutButtons from './AmountButtons'
import { useCartContext } from '../context/cart_context'
 

const AddToCart = ({single_product}) => {
  const {addToCart} = useCartContext()
 const {id, stock, colors} = single_product
 const [mainColor, setMainColor] = useState(colors[0])
 const [amount, setAmount] = useState(1)
 
 const increase = ()=>{
 stock > 1 ? setAmount(amount + 1) : null
 }
 const decrease = ()=>{
  stock > 1 ? setAmount(amount - 1) : null
 }
 
  return (
    <Wrapper>
      <div className="colors">
        <span>colors :</span>
        
        <div>
          {colors.map((color,index)=>{
            return <button key={index} style={{background:color}}
            onClick={()=>setMainColor(color)}
            className={`${mainColor === color ?
            'color-btn active' : 'color-btn'}`}>
              {mainColor === color ? <FaCheck/> : null}
              </button>
          })}
        </div>
        <div className="btn-container">
          <AmoutButtons increase={increase} stock={stock} decrease={decrease} amount={amount}/>
          <Link to='/cart' className='btn' onClick={()=>addToCart(id,mainColor,amount,single_product)}>
            add to cart
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin-top: 2rem;
.colors{
  display: grid;
  grid-template-columns: 125px 1fr;
  align-items: center;
  margin-bottom: 1rem;
  span{
    text-transform: capitalize;
    font-weight: 700;
  }
  div{
    display: flex;
  }
}
.color-btn{
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #222;
  margin-right: 0.5rem;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  svg{
    font-size: 0.75rem;
    color: var(--clr-white);

  }
}
.active{
  opacity: 1;
}
.btn-container{
  margin-top: 2rem;
  width: 140px;
}
`

export default AddToCart