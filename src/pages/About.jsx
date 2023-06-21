import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import {PageHero} from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'
const About = () => {
  return (
    <main>
      <PageHero title='about'/>
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt="desk" />
        <article>
          <div className="title">
            <h2>story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatum neque quod accusantium explicabo vel tempora reiciendis odio repellat sed asperiores, excepturi, 
            doloremque pariatur quibusdam nesciunt enim dolor modi consequatur!
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
display: grid;
gap: 4rem;
img{
  width: 100%;
  display: block;
  border-radius: 1px;
  height: 500px;
  object-fit: cover;
}
p{
  line-height: 2;
  max-width: 45rem;
  margin: 0 auto;
  margin-top: 2rem;
  color: var(--clr-grey-5);
}
.title{
  text-align: left;
}
.underline{
  margin-left: 0;
}
@media (min-width:992px) {
  grid-template-columns: 1fr 1fr;
}
`

export default About