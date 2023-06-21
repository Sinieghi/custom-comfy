import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../actions";

export const reducer = (state, action) => {
  // ProduList section
  if (action.type === LOAD_PRODUCTS) {
    /* filter section */
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    /**/

    return {
      ...state,

      filtered_product: [...action.payload],
      all_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  //grid view
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: `${action.payload}` };
  }

  // Sort section
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_product } = state;
    let tempProduct = [];
    if (sort === "price-lowest") {
      tempProduct = filtered_product.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProduct = filtered_product.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProduct = filtered_product.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "price-z") {
      tempProduct = filtered_product.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_product: tempProduct };
  }

  //filter section, esse cara aqui faz todos os filtros de forma dinamica
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    console.log(name, value);
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  // resultado de todos os filtros, é aqui que cria um array novo ja filtrado sem alterar a default
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, company, category, color, price, shipping } = state.filters;
    let tempProduct = [...all_products];
    //text filter
    if (text) {
      tempProduct = tempProduct.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    //category filter
    if (category !== "all") {
      tempProduct = tempProduct.filter((product) => {
        return product.category === category;
      });
    }
    //company filter
    if (company !== "all") {
      tempProduct = tempProduct.filter((product) => {
        return product.company === company;
      });
    }
    //color filter
    if (color !== "all") {
      tempProduct = tempProduct.filter((product) => {
        return product.colors.filter((c) => c === color);
      });
    }
    //price
    tempProduct = tempProduct.filter((product) => product.price <= price);
    //shipping
    if (shipping) {
      tempProduct = tempProduct.filter((product) => product.shipping === true);
    }

    // aqui acontece uma parada maneira, all_products contem todos os produtos, ja o filtered_product contem os novos valores filtrados e sempre que filtrado eu re-escreve o filtered_product, ja que o mesmo não passa pelo spread
    return { ...state, filtered_product: tempProduct };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        // esse segundo spread acontece para conseguir remover o max e min price sem alterar a array default
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  throw new Error("no match in actions");
};
