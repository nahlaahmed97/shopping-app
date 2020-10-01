import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import thunk from 'redux-thunk'
import {cartReducer} from './reducers/cartReducers';
import Cookie from 'js-cookie';
const cartItems = Cookie.getJSON("cartItems") || [];
const initialState = { cart : {cartItems}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;