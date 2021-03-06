import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const addToCart = (product) => (dispatch, getState) => { //getState is get what ever state is
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  
  cartItems.forEach((x) => {if (x._id === product._id) {alreadyExists = true; x.count++; }});
  
  if (!alreadyExists) { cartItems.push({ ...product, count: 1 });} //add one item to the cart
  dispatch({type: ADD_TO_CART,payload: { cartItems },});
  localStorage.setItem("cartItems", JSON.stringify(cartItems));//update localsstorage
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice().filter((x) => x._id !== product._id);
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));//update localsstorage
};