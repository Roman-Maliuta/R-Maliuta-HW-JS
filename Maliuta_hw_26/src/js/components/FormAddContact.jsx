import React, { Component, Fragment } from "react";
import { RenderUser } from './RenderUser.jsx'

export class FormAddContact extends Component{
    constructor() {
        super();

        this.state = {
            name: '',
            username: '',
            phone: '',
            email: '',
            id: '',
            contacts: []
        }
    }

    createContact = (e) => { 
       e.preventDefault();
        if (
     this.state.name !== '' &&
     this.state.username !== '' &&
     this.state.phone !== '' &&
     this.state.email !== '' && 
     this.state.id !== ''      
        ) {
            this.sendNewContact(
                this.state.name, this.state.username, this.state.phone, this.state.email, this.state.id
            )
            this.showHide()
       }
    }

    sendNewContact( name, username, phone, email, id ) {
        const infoToSend = {
          name: name,
          username: username,  
          phone: phone,
          email: email,
          userId: +(id)
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              body: JSON.stringify(infoToSend),
              headers: {'Content-type': 'application/json; charset=UTF-8'},
        })
        .then((response) => response.json())
            .then((json) => {
            this.setState({
                    contacts: [... this.state.contacts, json],
                })
            })
            .catch(error => console.log(error));
    }
    
    showHide() {
        const form = document.querySelector('div.form');
        const btnShow = document.querySelector('button.btn-show');
        form.classList.toggle('hide');
        btnShow.classList.toggle('hide');
        this.setState({
             name: '',
             username: '',
             phone: '',
             email: '',
             id: ''
        }) 
    }
    filterDel = (contactId, userId) => {
        this.setState({
            contacts: this.state.contacts.filter(contact => contact.userId !== userId)
        })
    }

    onInputChange = (e) => {
        this.setState({
         [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <>
            <RenderUser renderContact={this.state.contacts} actionDel={this.filterDel}/>
              <div className="form hide">
                <form onSubmit={this.createContact} >
                   <p className='form-p'>Create Contact:</p>
                   <input className="form-field" type="text" name="name" value={this.state.name} id="name" placeholder="Full name" onChange={this.onInputChange} />
                   <input className="form-field" type="text" name="username" value={this.state.username} id="username" placeholder="Username" onChange={this.onInputChange} />
                   <input className="form-field" type="text" name="phone" value={this.state.phone} id="tel" placeholder="Phone number" onChange={this.onInputChange} />
                   <input className="form-field" type="text" name="email" value={this.state.email} id="email" placeholder="Email" onChange={this.onInputChange} />
                   <input className="form-field" type="text" name="id" value={this.state.id} id="new-id" placeholder=" Contat ID" onChange={this.onInputChange} />
                   <button>Create Contact</button>
                </form>
                <button onClick={() => this.showHide()} className='btn-hide'> Cancel</button>    
              </div>
              <button onClick={() => this.showHide()} className='btn-show'>Add Contact</button>
            </>
        )
    }
}