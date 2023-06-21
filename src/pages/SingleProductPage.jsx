import React, { useEffect } from 'react'
import {products_url, single_product_url as url} from '../utils/constants'
import { useNavigate,  Link, useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import { formatPrice } from '../utils/helpers'
import {AddToCart, Error, Loading, PageHero, ProductImages, Stars} from '../components'
import { useProductContext } from '../context/products_context'

const SingleProduct = () => {
  //esse useParams le o valor atribuido a url, no caso a "/products/:id" pode chamar do que quiser id, name tanto faz
 const {id} = useParams()
 const {single_products_loading:loading,single_products_error:error,
  single_product,fetchSingleProduct} = useProductContext()
 
 useEffect(()=>{
    fetchSingleProduct(`${url}${id}`)
  },[id])
 
  if(loading){
    return <Loading/>
  }
  if(error){
    return <Error/>
  }  
const {images,  name, id:sku, description, company, color, price, stars, stock, reviews} = single_product
  
  return (
    <Wrapper>
      {/* aqui é aquele mesmo esquema de passar objeto para o parametro dessa prop */}
    <PageHero title={name} product={name}/>
    <div className="section section-center">
      <Link to='/products' className='btn'>
        back to products
      </Link>
      <div className="product-center">
        <ProductImages images={images}/>
        <section className="center">
          <h2>{name}</h2>
          <Stars stars={stars} reviews={reviews}/>
          <h5 className='price'>{formatPrice(price)}</h5>
          <p className="desc"> {description}</p>
          <p className="info">
            <span>Available : </span>
            {stock ? 'in stock' : 'out of stock'}
          </p>
          <p className="info">
            <span>SKU : </span>
            {sku}
          </p>
          <p className="info">
            <span>Brand : </span>
            {company}
          </p>
          <hr />
          {stock > 0 && <AddToCart single_product={single_product}/>}
        </section>
      </div>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.main`
.product-center{
  display: grid;
  gap: 4rem;
  margin-top: 2rem;
}
.price{
  color: var(--clr-primary-5);

}
.desc{
  line-height: 2;
  max-width: 45rem;

}
.info{
  text-transform: capitalize;
  width: 300px;
  display: grid;
  grid-template-columns: 125px 1fr;
  span{
    font-weight: 700;
  }
}
@media (min-width:992px) {
  .product-center{
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .price{
    font-size: 1.25rem;
  }
}
`

export default SingleProduct