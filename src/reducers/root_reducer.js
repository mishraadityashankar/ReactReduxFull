import CakeReducer from './cake_reducer'
import {combineReducers} from 'redux'
import IceCreamReducer from './icecream_reducer';
import APIReducer from './api_reducer';

const root_reducer = combineReducers({
    cake: CakeReducer,
    iceCream: IceCreamReducer,
    user: APIReducer
});

export default root_reducer;