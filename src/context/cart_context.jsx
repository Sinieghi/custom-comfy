import React, { createContext, useContext, useEffect, useReducer } from 'react'
import {reducer} from '../reducers/cart_reducer'
import { ADD_TO_CART, CLEAR_CART, COUNT_CART_TOTALS, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT } from '../actions'

const getLocalStorage = ()=>{
  let cart = localStorage.getItem('cart')
  if(cart){
    return JSON.parse(localStorage.getItem('cart'))
  }
  else{
    return []
  }
}

const defaultState = {
  cart:getLocalStorage(),
   total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
}

const AppContext = createContext()

const CartContext = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const addToCart = (id, color, amount, product)=>{
    dispatch({type:ADD_TO_CART, payload:{ id, color, amount, product }})
  }
  const removeItem = (id)=>{
    dispatch({type:REMOVE_CART_ITEM, payload:id})
  }
  const toggleAmount = (id, value)=>{
    dispatch({type:TOGGLE_CART_ITEM_AMOUNT, payload:{id,value}})
  }

  const clearCart = ()=>{
    dispatch({type:CLEAR_CART})
  }
  

  useEffect(()=>{
    dispatch({type:COUNT_CART_TOTALS})
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },[state.cart])
  return (
    <AppContext.Provider value={{...state,addToCart,removeItem,toggleAmount,clearCart}}>
      {children}
    </AppContext.Provider>
  )
}
export const useCartContext = ()=>{
  return useContext(AppContext)
}
export default CartContext