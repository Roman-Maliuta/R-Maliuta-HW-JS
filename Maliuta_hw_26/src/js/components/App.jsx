import React, { Component, Fragment } from 'react';
import { ContactsList } from './ContactsList.jsx';
import { FormAddContact } from './FormAddContact.jsx';


 export class App extends Component{
        constructor() {
        super() 
    } 
    
    render() {
      return (
        <> 
          <ContactsList/>
          <FormAddContact/> 
        </>            
        )
    }

}