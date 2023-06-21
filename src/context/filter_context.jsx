import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { reducer } from '../reducers/filter_reducer'
import { useProductContext } from './products_context'
import { CLEAR_FILTERS, FILTER_PRODUCTS, LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, SORT_PRODUCTS, UPDATE_FILTERS, UPDATE_SORT } from '../actions'

const AppContext = createContext()

const defaultState = {
filtered_product:[],
all_products:[],
grid_view: true,
sort:'price-lowest', 
filters:{
  text:'',
  company:'all',
  category:'all',
  color:'',
  min_price:0,
  max_price:0,
  price:0,
  shipping:false
}
}

export const FilterContext = ({children}) => {

  const {products} = useProductContext()

  const [state, dispatch] = useReducer(reducer, defaultState)
 


  useEffect(()=>{
    
    dispatch({type:LOAD_PRODUCTS, payload:products})

  },[products])

  useEffect(()=>{
    dispatch({type:FILTER_PRODUCTS});
    dispatch({type:SORT_PRODUCTS});
    
  },[products, state.sort, state.filters])


  const setGridView = ()=>{
    dispatch({type:SET_GRIDVIEW})
  }
  const setListView = ()=>{
    dispatch({type:SET_LISTVIEW})
  }

  //classico setup de apontar para um input, esse input ta la no sort btw
  const updateSort = (e)=>{
    // o nome nesse caso n importa, só o value msm
    // const name = e.target.name
    const value = e.target.value
    
    dispatch({type:UPDATE_SORT, payload: value})
  }

  const updateFilter = (e)=>{
    //esses carinhas aqui é os input do fiter, no caso os input text, que vc filtra por texto 
    let name = e.target.name
    let value = e.target.value

    
    //aqui é o filtro por btn, vc seleciona a categoria. Esse textContent targeta o texto digitado no btn <btn>text</btn>
    if(name === 'category'){
      value = e.target.textContent
      
    }
    //filtro da cor
    if(name === 'color'){
      value = e.target.dataset.color
    }
    //filtro da barra de price, pq o valor sai em string ao invés de numero
    if(name === 'price'){
      value = Number(value)
    }
    //checkin shipping
    if(name === 'shipping'){
      value = e.target.checked
    }


   dispatch({type:UPDATE_FILTERS, payload:{name,value}})
  }

  const clearFilters = ()=>{
    dispatch({type:CLEAR_FILTERS})
  }

   return<AppContext.Provider value={{...state,setListView,setGridView,updateSort,updateFilter,clearFilters}}>
        {children}
       </AppContext.Provider>
}

export const useFilterContext = ()=>{
   return useContext(AppContext)
}

