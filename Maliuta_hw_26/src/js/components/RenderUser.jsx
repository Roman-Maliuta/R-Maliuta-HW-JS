import React, { Component, Fragment } from "react";

export class RenderUser extends Component {
    constructor() {
        super();

    }

    onContactDelete = (contactId, userId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${contactId}`, {
          method: 'DELETE',
        })
        .then((response) => {
         const responsDel = response.status;
            if (responsDel === 200) {
                this.props.actionDel(contactId, userId)
            } 
        })
       .catch(error => console.log(error))
    }

    render() { 
        return (
            <ul className="list" >
                {this.props.renderContact.map(contact => (
                    <li key={`${ contact.id }-${contact.username}`} className="list-contact">
                            <p className="list-contact-data">Full name: {contact.name}</p>
                            <p className="list-contact-data">Username: {contact.username}</p>
                            <p className="list-contact-data">Phone: {contact.phone}</p>
                            <p className="list-contact-data">Email: <a href="mailto:#">{contact.email}</a></p>
                            <button onClick={() => this.onContactDelete(contact.id, contact.userId)} className='list-item-btn'>Delete contact</button>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

