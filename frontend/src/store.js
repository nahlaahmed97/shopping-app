import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { productDetailsReducer, productSaveReducer, productDeleteReducer, productListReducer } from './reducers/productReducers';
import thunk from 'redux-thunk'
import {cartReducer} from './reducers/cartReducers';
import Cookie from 'js-cookie';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';
const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null ;

const initialState = { cart : {cartItems,shipping: {},payment: {}}, userSignin: {userInfo}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer
})
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;