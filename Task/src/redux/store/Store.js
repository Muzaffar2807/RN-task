import {createStore} from 'redux';
import {combineReducers} from 'redux';

import CartReducer from '../reducer/CartReducer';
import FavouritesReducer from '../reducer/FavouritesReducer';

const routeReducer = combineReducers({CartReducer, FavouritesReducer});

const store = createStore(routeReducer);

export default store;
