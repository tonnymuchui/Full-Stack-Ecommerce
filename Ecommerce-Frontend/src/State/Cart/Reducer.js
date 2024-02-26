import {
    ADD_ITEM_TO_CART_REQUEST,
    ADD_ITEM_TO_CART_SUCCESS,
    ADD_ITEM_TO_CART_FAILURE,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_FAILURE,
    REMOVER_CART_ITEM_REQUEST,
    REMOVER_CART_ITEM_SUCCESS,
    REMOVER_CART_ITEM_FAILURE,
    UPDATE_CART_ITEM_REQUEST,
    UPDATE_CART_ITEM_SUCCESS,
    UPDATE_CART_ITEM_FAILURE,
  } from "./ActionTypes";
  
  // Define the initial state of the cart
  const initialState = {
    cartItems: [],
    loading: false,
    error: null,
  };
  
  // Define the cart reducer function
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ITEM_TO_CART_REQUEST:
      case GET_CART_REQUEST:
      case REMOVER_CART_ITEM_REQUEST:
      case UPDATE_CART_ITEM_REQUEST:
        // Set loading to true and clear any previous errors
        return {
          ...state,
          loading: true,
          error: null,
        };
      case ADD_ITEM_TO_CART_SUCCESS:
        // Add the new item to the cart and reset loading and error state
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload.cartItem],
          loading: false,
          error: null,
        };
      case GET_CART_SUCCESS:
        // Update the cart with the fetched items and reset loading and error state
        return {
          ...state,
          cartItems: action.payload.cartItems,
          cart: action.payload,
          loading: false,
          error: null,
        };
      case REMOVER_CART_ITEM_SUCCESS:
        // Remove the item from the cart and reset loading state
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload),
          loading: false,
        };
      case UPDATE_CART_ITEM_SUCCESS:
        // Reset loading and error state after successful item update
        return {
          ...state,
          loading: false,
          error: null,
        };
      case ADD_ITEM_TO_CART_FAILURE:
      case GET_CART_FAILURE:
        // Set loading to false and update error state
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case REMOVER_CART_ITEM_FAILURE:
      case UPDATE_CART_ITEM_FAILURE:
        // Set loading to false and update error state
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        // Return current state if no matching action type is found
        return state;
    }
  };
  
  export default cartReducer;
  