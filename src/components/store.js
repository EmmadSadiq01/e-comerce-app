import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { cartItemReducer } from './reducer/cartReducer';
import { productDetailReducer, productlistReducer } from './reducer/productReducer'


const initialState = {
    getCartItems: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    },
};



const my_reducer = combineReducers({
    product_list: productlistReducer,
    productDetails: productDetailReducer,
    getCartItems: cartItemReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    my_reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)
export default store;





