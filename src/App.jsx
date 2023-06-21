
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import style from 'styled-components'

import {   FeaturedProducts,
  Navbar,
  CartButtons,
  Footer,
  Sidebar,
  Hero,
  Services,
  Contact,
  Loading,
  // Error,
  ProductImages,
  AddToCart,
  Filters,
  ProductList,
  Sort,
  Stars,
  CartContent,
  PageHero,
  StripeCheckout, } from './components'
import {About,
AuthWrapper,
SingleProduct,
Private,
Home,
Error,
Checkout,
Cart,
Products,} from './pages'


function App() {
  

  return (
    <AuthWrapper>
    
       <Router>
        <Navbar/>
        <Sidebar/>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='products/:id' element={<SingleProduct/>}/>
          <Route path='checkout' element={
            <Private>
              <Checkout/>
            </Private>
          }/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer/>
       </Router>
    
    </AuthWrapper>
  )
}

export default App
