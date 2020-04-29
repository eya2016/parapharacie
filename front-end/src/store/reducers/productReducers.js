import { GET_PRODUCTS, GET_PRODUCT_CATEGORIES, GET_PRODUCT_PROMOS } from "../actions/productActions";

const initState = {
    products: [],
    productsPromo: [],
    categories: []
}

const productReducers = (state = initState, actions) => {
    switch(actions.type){
        case GET_PRODUCTS:
            state = {
                ...state,
                products: actions.products
            }
            break;
        case GET_PRODUCT_CATEGORIES:
            state = {
                ...state,
                categories: actions.categories
            }
            break;
        case GET_PRODUCT_PROMOS:
            state = {
                ...state,
                productsPromo: actions.productsPromo

            }
            break;
        default:
            break;
    }

    return state;

}

export default productReducers;