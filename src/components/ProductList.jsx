import React from 'react'
import GridView from './GridView'
import { useFilterContext } from '../context/filter_context'
import ListView from './ListView'


const ProductList = () => {
  const {filtered_product,grid_view} = useFilterContext()

  if(filtered_product.length < 1){
   return <h1>no match search</h1>
  }
   if(grid_view === false){
    return <ListView filtered_product={filtered_product}/>
  }
  return (
    <GridView filtered_product={filtered_product}>ProductList</GridView>
  )
}

export default ProductList