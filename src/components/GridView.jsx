import React from 'react'
import styled from 'styled-components'
import Product from './Product'
const GridView = ({filtered_product}) => {


  return (
    <Wrapper>
      <div className="products-container">
        {filtered_product.map((product)=>{
          return <Product key={product.id} {...product}/>
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
img{
  height: 175px;
}
.products-container{
  display: grid;
  gap: 2rem 1.8rem;
}

@media (min-width:992px) {
  .products-container{
    //esse 3 representa 3 colunas
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width:1170px) {
  .products-container{
    grid-template-columns: repeat(3, 1fr);
  }
}
`

export default GridView