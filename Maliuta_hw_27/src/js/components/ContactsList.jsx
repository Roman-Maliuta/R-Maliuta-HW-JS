import React, { Fragment, useState, useEffect } from "react";
import { Route, Routes, Link,  Outlet } from "react-router-dom";

export const ContactsList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setContacts(json))
        .catch(error => console.log(error));

    }, [])

    return (
        <ul className="list" >
            {contacts.map(contact => (
                   <li key={`${ contact.id }-${contact.username}`} className="list-item">
                        <p className="list-item-data">Full name: {contact.name}</p>
                        <p className="list-item-data">Username: {contact.username}</p>
                        <p className="list-item-data">Phone: {contact.phone}</p>
                        <p className="list-item-data">Email: <a href="mailto:#">{contact.email}</a></p>
                    <button className='btn-open'>
                        <Link to={'' + contact.id} className='link'>Albums</Link>
                    </button>
                    </li>
                ))
            }
        </ul>
    )
}
