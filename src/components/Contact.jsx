import React from 'react'
import { styled } from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our newsletter 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore corporis nihil dolorem nam provident maxime molestias reiciendis harum, cum delectus sint 
            exercitationem architecto vero assumenda accusamus ducimus dolorum, optio voluptatem?
          </p>
          <form className="contact-form" action='https://formspree.io/f/xdovqaov' method='POST'>
            <input type="email" name='_replyto' className="form-input" placeholder='email'/>
            <button type='submit' className='submit-btn'>submit</button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 5rem 0;
h3{
  text-transform: none;
}
p{
  line-height: 2;
  max-width: 45rem;
  color: var(--clr-gery-5);
}

.contact-form{
  width: 90vw;
  max-width: 500px;
  display: grid;
  grid-template-columns: 1fr auto;
}
.form-input,
.submit-btn{
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--clr-black);
}
.form-input{
  border-right: none;
  color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
}
.submit-btn{
      border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
}
.submit-btn:hover{
  color: var(--clr-white);
}
@media (min-width:992px) {
  .content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 8rem;
    margin-top: 2rem;
  }
  p{
    margin-bottom: 0;
  }
}
@media (min-width:1280px) {
  padding: 15rem 0;
}
`

export default Contact