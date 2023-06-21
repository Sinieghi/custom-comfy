import React from 'react'
import { styled } from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { formatPrice, getUniqueValues } from '../utils/helpers'
import {FaCheck} from 'react-icons/fa'
const Filters = () => {

  const {updateFilter,clearFilters,all_products,
  filters:{ text,company,category,color,min_price,max_price,
  price,shipping
}} = useFilterContext()

const categories = getUniqueValues(all_products, 'category');
const companies = getUniqueValues(all_products, 'company');
const colors = getUniqueValues(all_products, 'colors')

  return (
    <Wrapper>
       <div className="content">
        <form onSubmit={(e)=>e.preventDefault()}>

          {/* search text input */}
          <div className="form-control">
            <input type="text" name='text' 
            placeholder='search' className='search-input'
            value={text || ''} onChange={updateFilter} />
          </div>
          
          {/* categories btn */}
          <div className="form-control">
            <h5>categories</h5>
            <div>{categories.map((c,index)=>{
             return <button key={index} type='button' 
             name='category' 
             className={category === c.toLowerCase() ? 'active' : null}
             onClick={updateFilter}>{c}</button>
            })}</div>
          </div>

          {/* companies select */}
          <div className="form-control">
            <h5>company</h5>
            <select name="company" id="company" value={company}
            onChange={updateFilter}
            className="company">
              {companies.map((c,index)=>{
                return <option value={c} key={index}>{c}</option>
              })}
            </select>
          </div>

          {/* colors btn */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c, index)=>{
                if(c === 'all'){
                  return <button name='color' key={index} onClick={updateFilter} 
                  data-color='all' 
                  className={`${color === 'all'?'all-btn active':'all-btn'}`}>all</button>
                }

                return <button key={index} type='button' 
                name='color'
                onClick={updateFilter}
                className={`${color === c? 'color-btn active': 'color-btn' }`}
                style={{background:c}}
                data-color={c}
                >{color === c ? <FaCheck/> : null }</button>
              })}
            </div>
          </div>

          {/* price bar */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input type="range" name='price' onChange={updateFilter} 
            min={min_price} max={max_price} value={price || ''}/>
          </div>

          {/* shipping */}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input type="checkbox" name='shipping' id='shipping' 
            onChange={updateFilter} checked={shipping || ''}/>
          </div>
        </form>
        <button className="clear-btn" onClick={clearFilters} type='button'>clear</button>
       </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.form-control{
  margin-bottom: 1.25rem;
  h5{
    margin-bottom: 0.5rem;
  }
}
.search-input{
  padding: 0.5rem;
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  border-color: transparent;
  letter-spacing: var(--spacing);
}
.search-input::placeholder{
  text-transform: capitalize;
}
button{
  display: block;
  margin: 0.25rem 0;
  padding: 0.25rem 0;
  text-transform: capitalize;
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  letter-spacing: 1px;
  color: var(--clr-grey-5);
  cursor: pointer;
}
.active{
  border-color: var(--clr-grey-5);
}
.company{
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  border-color: transparent;
  padding: 0.25rem;
}
.colors{
  display: flex;
  align-items: center;
}
.color-btn{
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #222;
  margin-right: 0.5rem;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  svg{
    font-size: 0.5rem;
    color: var(--clr-white);
  }
}
.all-btn{
  text-decoration: underline;
}
.price{
  margin-bottom: 0.25rem;
}
.shippeng{
  display: grid;
}
`

export default Filters