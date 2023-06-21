import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { SIDEBAR,
GET_PRODUCTS_BEGIN,
GET_PRODUCTS_SUCCESS,
GET_PRODUCTS_ERROR,
GET_SINGLE_PRODUCT_BEGIN,
GET_SINGLE_PRODUCT_SUCCESS,
GET_SINGLE_PRODUCT_ERROR, } from '../actions'
import { reducer } from '../reducers/products_reducer'
import {products_url as url} from '../utils/constants'
import axios from 'axios'
const defaultValue = {
   isOpen:false,
   products_loading:false,
   products_error:false,
   products:[],
   featured_products:[],
   single_products_loading:false,
   single_products_error:false,
   single_product:{},
}
const AppContext = createContext()

export const ProductsContext = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultValue)

  const openSidebar = ()=>{
   dispatch({type:SIDEBAR})
  }

  const fetchProducts = async(url)=>{
   dispatch({type:GET_PRODUCTS_BEGIN})
   try {
      const response = await axios(url)
      const product = response.data
      // console.log(products);
      dispatch({type:GET_PRODUCTS_SUCCESS, payload:product})
   } catch (error) {
      dispatch({type:GET_PRODUCTS_ERROR})
   } 
  }

const fetchSingleProduct = async (url)=>{
dispatch({type:GET_SINGLE_PRODUCT_BEGIN})
try {
   const response = await axios(url)
   const single_product = await response.data
dispatch({type:GET_SINGLE_PRODUCT_SUCCESS, payload: single_product})
} catch (error) {
   dispatch({type:GET_SINGLE_PRODUCT_ERROR})
}

}
  useEffect(()=>{
   fetchProducts(url)
  },[])
// console.log(state);
   return<AppContext.Provider value={{...state, openSidebar, fetchSingleProduct}}>
        {children}
       </AppContext.Provider>
}

export const useProductContext = ()=>{
   return useContext(AppContext)
}




