import React, { Component, Fragment } from "react";
import { RenderUser } from './RenderUser.jsx';

export class ContactsList extends Component{
    constructor() {
        super();

        this.state = {
            contacts: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    contacts: json
                })
            })
            .catch(error => console.log(error));

    }

    filDel = (contactId) => {
        this.setState({
            contacts: this.state.contacts.filter(contact => contact.id !== contactId)
        })
    }

    render() {
        return (
            <>
             <RenderUser renderContact={this.state.contacts} actionDel={this.filDel}/>
            </>
        )
     }
}
