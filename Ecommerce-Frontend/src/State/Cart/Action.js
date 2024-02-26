import { api } from "../../config/ApiConfig";
import * as types from "./ActionTypes";

export const addItemToCart = (request) => async (dispatch) => {
  dispatch({ type: types.ADD_ITEM_TO_CART_REQUEST });

  try {
    const { data } = await api.put("/api/cart/add", request.data);
    dispatch({ type: types.ADD_ITEM_TO_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.ADD_ITEM_TO_CART_FAILURE, payload: error.message });
  }
};

export const removeCartItem = (request) => async (dispatch) => {
  dispatch({ type: types.REMOVER_CART_ITEM_REQUEST });

  try {
    await api.delete(`/api/cart_items/${request.cartItemId}`);
    dispatch({ type: types.REMOVER_CART_ITEM_SUCCESS });
  } catch (error) {
    dispatch({ type: types.REMOVER_CART_ITEM_FAILURE, payload: error.message });
  }
};

export const updateCartItem = (request) => async (dispatch) => {
  dispatch({ type: types.UPDATE_CART_ITEM_REQUEST });

  try {
    const { data } = await api.put(`/api/cart_items/${request.cartItemId}`, request.data);
    dispatch({ type: types.UPDATE_CART_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.UPDATE_CART_ITEM_FAILURE, payload: error.message });
  }
};

export const getCartItem = () => async (dispatch) => {
  dispatch({ type: types.GET_CART_REQUEST });

  try {
    const { data } = await api.get(`/api/cart/`);
    dispatch({ type: types.GET_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: types.GET_CART_FAILURE, payload: error.message });
  }
};
