import React, { Fragment, useState } from "react";
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import {addFetchContacts, onContactCustomDelete } from '../actions/index.js';
import { selectContactsCustom } from '../selectors/index.js';
import { RenderUser } from './RenderUser.jsx';

export const FormAddContact = () => {
    const dispatch = useDispatch();
    const { ContactsCustomList } = useSelector(selectContactsCustom);
    const [checked, setChecked] = useState(false);

    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const contactId = document.getElementById('contact-id');

    const clearValue = () => {
        name.value = ''; 
        username.value = ''; 
        phone.value = ''; 
        email.value = ''; 
        contactId.value  = ''  
    }

    const newContact = (name, username, phone, email, contactId) => {
        const infoToSend = {
          name: name.value,
          username: username.value,  
          phone: phone.value,
          email: email.value,
          userId: +(contactId.value)
        };
        dispatch(addFetchContacts(infoToSend))
    }
    
    const createContact = (e) => {
        e.preventDefault();
        if (
            name.value !== '' &&
            username.value !== '' &&
            phone.value !== '' &&
            email.value !== '' &&
            contactId.value  !== ''            
        ) {
            newContact(name, username, phone, email, contactId)
            clearValue()
        }
    }

    const onContactDel = (contactId, userId) => {
        dispatch(onContactCustomDelete(contactId, userId))
    }

    return (
       <>
            <ul className='list'>
               {ContactsCustomList.map(contact => <RenderUser contact={contact} onContactDel={onContactDel} />)}
            </ul>         

           <div  className={classNames('form', {'hide': !checked })}>
                <form onSubmit={createContact} >    
                   <p className='form-p'>Create Contact:</p>
                   <input className="form-field" type="text" name="name"  id="name" placeholder="Full name"  />
                   <input className="form-field" type="text" name="username"  id="username" placeholder="Username" />
                   <input className="form-field" type="text" name="phone"  id="phone" placeholder="Phone number" />
                   <input className="form-field" type="text" name="email"  id="email" placeholder="Email" />
                   <input className="form-field" type="text" name="contact-id"  id="contact-id" placeholder=" Contat ID" />
                   <button>Create Contact</button>
                </form>
                <button onClick={() =>(setChecked(!checked), clearValue())} className='btn-hide'> Cancel</button>    
            </div>
            <button onClick={() => setChecked(!checked)} className={classNames('btn-show', {'hide': checked })} >Add Contact</button>
        </>
    )
}
