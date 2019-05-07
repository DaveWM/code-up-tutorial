import React from 'react';
import './App.css';
import * as R from 'ramda';

export function toggleTodoCompleted(state, id) {
  return R.over(R.lensPath(["todos", id, "completed"]), R.not, state);
}

export function addTodo(state) {
  const newId = Math.max.apply(this, R.keys(state.todos)) + 1;
  return R.assocPath(["todos", newId], {id: newId, name: "New Todo", completed: false}, state);
}

export function changeTodoName(state, id, newName) {
  return R.assocPath(["todos", id, "name"], newName, state);
}

export function handleEvent(state, event) {
  switch(event.type){
    case "toggle":
      return toggleTodoCompleted(state, event.id);
    case "add":
      return addTodo(state);
    case "changeName":
      return changeTodoName(state, event.id, event.newName);
  }
}

export class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      todos: {
        1: {
          id: 1,
          name: "A dummy todo",
          completed: false
        }
      }
    }
  }

  render(){
    const updateState = (event) => {
      console.log("Updating: ", event);
      const newState = handleEvent(this.state, event);
      this.setState(newState);
    }

    return (
      <div>
        <header>
          <h1>My Awesome Todo App</h1>
        </header>
        <content>
          <p>Welcome to my awesome todo app 🙌</p>
          <ul>
          {R.values(this.state.todos).map(t => {
            const todoDisplay = t.completed ? <s>{t.name}</s> : <input onChange={(ev) => updateState({type: "changeName", id: t.id, newName: ev.target.value})} value={t.name}></input>; 
            return <li>{todoDisplay} <input type="checkbox" checked={t.completed} onChange={(_) => updateState({type: "toggle", id: t.id})}/></li>
          })}
          </ul>
          <button onClick={(_) => updateState({type: "add"})}>Add a Todo</button>
        </content>
      </div>
    );
  }
}

export default App;
