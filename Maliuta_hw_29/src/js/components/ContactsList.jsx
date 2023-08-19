import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, onContactDelete } from '../actions/index.js';
import {selectContactsServe} from '../selectors/index.js';
import { RenderUser } from './RenderUser.jsx';


export const ContactsList = () => {
    const dispatch = useDispatch();
    const { ContactsServerList } = useSelector(selectContactsServe);


    useEffect(() => {
        dispatch(fetchContacts())

    }, []);

    const onContactDel = (contactId) => {
        dispatch(onContactDelete(contactId))
    }

    return (
        <>
        <ul className='list'>
            {ContactsServerList.map(contact => <RenderUser contact={contact} onContactDel={onContactDel} />)}
        </ul>
        </>
    )

}
