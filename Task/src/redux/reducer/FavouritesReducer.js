import {ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES} from '../ActionTypes';



const FavouritesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return [...state, action.payload];

    case REMOVE_FROM_FAVOURITES:
      const deletedArray2 = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedArray2;
    
    default: 
      return state;
  }
};

export default FavouritesReducer;
