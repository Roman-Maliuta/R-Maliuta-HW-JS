import React, { Fragment } from "react";

export const RenderUser = ({ contact , onContactDel }) => {
     return (
            <li key={`${ contact.id }-${contact.username}`} className="list-contact">
                <p className="list-contact-data">Full name: {contact.name}</p>
                <p className="list-contact-data">Username: {contact.username}</p>
                <p className="list-contact-data">Phone: {contact.phone}</p>
                <p className="list-contact-data">Email: <a href="mailto:#">{contact.email}</a></p>
                <button onClick={() => onContactDel(contact.id, contact.userId)} className='list-contact-btn'>Delete contact</button>
            </li>

        ) 
}
