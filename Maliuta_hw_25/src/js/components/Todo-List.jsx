import React, { Component, Fragment } from 'react';

export class TodoList extends Component{
        constructor() {
        super()
            this.state = {
            li: [],   
            title: '',
            descritpion: ''           
        }
            
    } 
     createTodo = (e) => { 
       e.preventDefault();
        if (
     this.state.title !== '' &&
     this.state.descritpion !== '' 
        ) {
        this.setState({
            li: [... this.state.li, { title: this.state.title, descritpion: this.state.descritpion }],
            title: '',
            descritpion: ''
        })   
     }
    }
    
    onInputChange = (e) => {
        this.setState({
         [e.target.name]: e.target.value
        })
    }
     
    changeStatus(index) {
        const liActive = document.getElementById(`${index}`);
        const pDone = liActive.querySelector('p:last-of-type');
        const btnDelete = liActive.querySelector('button');
        liActive.classList.toggle('list-item-done');
        pDone.classList.toggle('list-item-hide');   
        pDone.classList.toggle('list-item-pDone');
        btnDelete.classList.toggle('list-item-hide'); 
    }
    onTodoDelete(indx) {
        this.setState({
            li: this.state.li.filter((item, index) => index !== indx)
        })
    }
     
    render() {
        return (
            <Fragment>
                <ul className='list'>
                    {this.state.li.map((item, index) => (
                    <li key={`${item}-${index}`}  className='list-item'>
                            <button onClick={() => this.changeStatus(index)} id={`${index}`} className='list-item-todo'>
                                <p>Title: {item.title}</p>
                                <p>Description: {item.descritpion}</p>
                                <p className='list-item-hide'>done</p>
                                <button  onClick={() => this.onTodoDelete(index)} className='list-item-hide'>Delete todo</button>
                            </button>
                    </li>
                ))}
                </ul>
                <form onSubmit={this.createTodo} className='form'>
                    <p className='form-p'>Create new todo:</p>
                   <input className="form-field" type="text" name="title" value={this.state.title} id="title" placeholder="Title" onChange={this.onInputChange} />
                   <input className="form-field" type="text" name="descritpion" value={this.state.descritpion} id="descritpion" placeholder="Descritpion" onChange={this.onInputChange} />
                   <button>add</button>
                </form>  
        </Fragment>        
        )
    }

}