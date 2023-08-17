import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App.jsx';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import '../styles/style.scss';


const initialTodoList = {
       list: []
};

const reducer = (state = initialTodoList, action) => {
       switch (action.type) {
              case 'New_Todo': {
                     state = {
                            ...state,
                            list: [...state.list, action.payload ]
                     }
                     break;
              }
              case 'Delete_todo': {
                     state = {
                            ...state,
                            list: state.list.filter((item, index) => index !== action.payload)
                     }
                     break;
              }
       }
       return state;
}

const store = createStore(reducer);

const root = createRoot(document.getElementById('app'));
root.render(
       <Provider store={store}>
                <App/>
       </Provider>
);
