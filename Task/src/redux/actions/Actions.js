import {
  ADD_TO_CART,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_CART,
  REMOVE_FROM_FAVOURITES,
} from '../ActionTypes';

export const addItemToCart = data => ({
  type: ADD_TO_CART,
  payload: data,
});

export const removeFromCart = index => ({
  type: REMOVE_FROM_CART,
  payload: index,
});

export const addToFavourites = data => ({
  type: ADD_TO_FAVOURITES,
  payload: data,
});

export const removeFromFavourites = index => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: index,
});
