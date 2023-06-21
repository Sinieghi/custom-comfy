import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductsContext } from './context/products_context.jsx'
import {FilterContext} from './context/filter_context.jsx'
import CartContext from './context/cart_context.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import UserContext from './context/user_context.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* pelo que entendi o filho acessa as info do pai */}
 <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <UserContext>
    <ProductsContext>
      <FilterContext>
        <CartContext>
         <App />
        </CartContext>
      </FilterContext>
    </ProductsContext>
    </UserContext>
    </Auth0Provider>
  </React.StrictMode>,
)
