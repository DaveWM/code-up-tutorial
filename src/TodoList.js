import React from 'react';
import * as R from 'ramda';

export function TodoList({todos, dispatch}) {
    return (
        <div>
          <header>
            <h1>My Awesome Todo App</h1>
          </header>
          <content>
            <p>Welcome to my awesome todo app 🙌</p>
            <ul>
            {R.values(todos).map(t => {
              const todoDisplay = t.completed ? <s>{t.name}</s> : <input onChange={(ev) => dispatch({type: "changeName", id: t.id, newName: ev.target.value})} value={t.name}></input>; 
              return <li>{todoDisplay} <input type="checkbox" checked={t.completed} onChange={(_) => dispatch({type: "toggle", id: t.id})}/></li>
            })}
            </ul>
            <button onClick={(_) => dispatch({type: "add"})}>Add a Todo</button>
          </content>
        </div>
      );
}