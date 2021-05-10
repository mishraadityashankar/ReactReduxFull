import {createStore,applyMiddleware} from 'redux';
import root_reducer from './reducers/root_reducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
const store = createStore(root_reducer,applyMiddleware(thunk,logger));
export default store;