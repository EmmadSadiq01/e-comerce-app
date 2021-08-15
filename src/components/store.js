import {createStore,combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {productDetailReducer, productlistReducer} from './reducer/productReducer'


const initialState = {};
const my_reducer = combineReducers({
    product_list : productlistReducer,
    productDetails : productDetailReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore( my_reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;





