import React from 'react'
import { styled } from 'styled-components'
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'

const Stars = ({reviews,stars}) => {
  // esse undeline vem pq o primeiro valor é undefined, que é o valor que vem da criação do array
const tempStars = Array.from({length:5},(_,index)=>{
  let number = index + 0.5

  return(  <span key={index}>          
          {stars >= index ? <BsStarFill/> : stars >= number? <BsStarHalf/> : <BsStar/>}
          </span>)
})



  return (
    <Wrapper>
      <div className="stars">
        {tempStars}
        {/* <span>
          metodo manual 
          {stars >= 1 ? <BsStarFill/> : stars >= 0.5? <BsStarHalf/> : <BsStar/>}
          {stars >= 2 ? <BsStarFill/> : stars >= 1.5? <BsStarHalf/> : <BsStar/>}
          {stars >= 3 ? <BsStarFill/> : stars >= 2.5? <BsStarHalf/> : <BsStar/>}
          {stars >= 4 ? <BsStarFill/> : stars >= 3.5? <BsStarHalf/> : <BsStar/>}
          {stars === 5 ? <BsStarFill/> : stars >= 4.5? <BsStarHalf/> : <BsStar/>} 
          
        </span> */}
      </div>
      <p className="reviews">({reviews} reviews)</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`
export default Stars