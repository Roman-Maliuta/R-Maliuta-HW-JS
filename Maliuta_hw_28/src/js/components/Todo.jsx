import React, { Fragment, useState } from 'react';
import classNames from 'classnames';


export const Todo = ({ todo, index, del}) => { 
  const [checked, setChecked] = useState(false);

  return (
       <Fragment>
            <li key={`${todo.title}-${index}`}  className='list-item'>
                <button onClick={() => setChecked(!checked)} id={`${index}`} className={classNames('list-item-todo', {'list-item-done': checked })} >
                    <p>Title: {todo.title}</p>
                    <p>Description: {todo.descritpion}</p>
                    <p className={classNames({
                  'list-item-pDone': checked,'list-item-hide': !checked })}>done</p>
                    <button  onClick={() => del(index)} className={classNames({
                  'list-item-hide': !checked })}>Delete todo</button>
                </button>
            </li>
        </Fragment>        
  )
}