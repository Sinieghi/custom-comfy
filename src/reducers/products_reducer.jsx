import { SIDEBAR,
GET_PRODUCTS_BEGIN,
GET_PRODUCTS_SUCCESS,
GET_PRODUCTS_ERROR,
GET_SINGLE_PRODUCT_BEGIN,
GET_SINGLE_PRODUCT_SUCCESS,
GET_SINGLE_PRODUCT_ERROR, } from "../actions";

export const reducer = (state, actions) => {
  if(actions.type === SIDEBAR){
let {isOpen} = state
!isOpen ? isOpen=true : isOpen = false
return {...state, isOpen}
  }
  if(actions.type === GET_PRODUCTS_BEGIN){
    return{...state, products_loading:true}
  }
  if(actions.type === GET_PRODUCTS_SUCCESS){
    // console.log(actions.payload);
    const featured_products = actions.payload.filter((prod)=>prod.featured === true)
    // aqui  esta retornando prodct com featured_product q estive como true, e o featured_product não estiver true ele remove a prop featured_product
    return {...state, products_loading:false, products:actions.payload, featured_products}
  }
  if(actions.type === GET_PRODUCTS_ERROR){

    return {...state,products_loading:false, products_error:true}
  }
   if(actions.type === GET_SINGLE_PRODUCT_BEGIN){

    return{...state, single_products_loading:true, single_products_error:false}
  }
  if(actions.type === GET_SINGLE_PRODUCT_SUCCESS){
    
     
    return{...state, single_products_loading:false, single_product:actions.payload}
  }

  if(actions.type === GET_SINGLE_PRODUCT_ERROR){
       return {...state,single_products_loading:false, single_products_error:true}

  }
}
