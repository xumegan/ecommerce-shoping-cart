import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
//import { orderReducer } from "./reducers/orderReducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//send all imformation from store to moniter the action
const store = createStore(
 // combineReducers({ products: productsReducer, cart: cartReducer,order: orderReducer,}),
  combineReducers({ products: productsReducer,cart: cartReducer, }),
  initialState,
  composeEnhancer(applyMiddleware(thunk)) //use this middleware
);
export default store;