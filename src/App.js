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
    const updateStateToggleTodoCompleted = (id) => {
      const newState = toggleTodoCompleted(this.state, id);
      this.setState(newState);
    }

    const updateStateAddTodo = () => {
      const newState = addTodo(this.state);
      this.setState(newState);
    };

    const updateStateChangeTodoName = (id, newName) => {
      const newState = changeTodoName(this.state, id, newName);
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
            const todoDisplay = t.completed ? <s>{t.name}</s> : <input onChange={(ev) => updateStateChangeTodoName(t.id, ev.target.value)} value={t.name}></input>; 
            return <li>{todoDisplay} <input type="checkbox" checked={t.completed} onChange={(_) => updateStateToggleTodoCompleted(t.id)}/></li>
          })}
          </ul>
          <button onClick={(_) => updateStateAddTodo()}>Add a Todo</button>
        </content>
      </div>
    );
  }
}

export default App;
