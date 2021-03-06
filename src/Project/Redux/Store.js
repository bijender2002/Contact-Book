import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import LaptopReducer from './LaptopReducer';

const store=createStore(LaptopReducer,applyMiddleware(logger));

export default store;