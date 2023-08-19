import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {contactsServerReducer, contactsCustomReducer } from './reducers/index.js';

const rootReducer = combineReducers({
    contactsServer: contactsServerReducer,
    contactsCustom: contactsCustomReducer

});

const middleware = [logger, thunk];

 export const store = createStore(rootReducer, applyMiddleware(...middleware));