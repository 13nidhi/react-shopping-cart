import { combineReducers } from 'redux';
import productsReducer from './productReducers';
import cartReducers from './cartReducers';
import orderReducer from './orderReducers';

export default combineReducers({
    products: productsReducer,
    cart: cartReducers,
    order: orderReducer
})