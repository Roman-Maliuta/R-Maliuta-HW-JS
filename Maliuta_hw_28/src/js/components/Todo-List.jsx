import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Todo }  from './Todo.jsx';


const TodoList = ({list, addTodo, deleteTodo}) => {
    const newTodo = (todoTitle, todoDescr) => {
        const dataTodo = {
         title: todoTitle.value,
         descritpion: todoDescr.value
        }
        addTodo(dataTodo);
    }

    const createTodo = (e) => { 
        e.preventDefault();
        const todoTitle = document.getElementById('title');
        const todoDescr = document.getElementById('descritpion');
        if (
     todoTitle.value !== '' &&
     todoDescr.value  !== '' 
        ) {
        newTodo(todoTitle, todoDescr)
        todoTitle.value = '';
        todoDescr.value = ''  
     }
    }
    return (
        <Fragment>
            <ul className='list'>
                    {list.map((todo, index) => <Todo todo={todo} index={index} del={deleteTodo} />)}
            </ul>

                <form onSubmit={createTodo} className='form'>
                    <p className='form-p'>Create new todo:</p>
                   <input className="form-field" type="text" name="title"  id="title" placeholder="Title"  />
                   <input className="form-field" type="text" name="descritpion"  id="descritpion" placeholder="Descritpion"  />
                   <button>add</button>
                </form>  
        </Fragment>        
    )
}

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (dataTodo) => {
            dispatch({
                type: 'New_Todo',
                payload: dataTodo
            })
        },
        deleteTodo: (dataTodo) => {
            dispatch({
                type: 'Delete_todo',
                payload: dataTodo
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
