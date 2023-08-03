import React, { Component, Fragment } from 'react';
import { TodoList } from './Todo-List.jsx';

 export class App extends Component{
        constructor() {
        super() 
    } 
    
    render() {
        return (
          <TodoList/>             
        )
    }

}