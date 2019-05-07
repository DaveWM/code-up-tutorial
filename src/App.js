import React from 'react';
import './App.css';
import * as R from 'ramda';

class App extends React.Component {
  
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
    const toggleTodoCompleted = (id) => {
      const newState = R.over(R.lensPath(["todos", id, "completed"]), R.not, this.state);
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
            const todoDisplay = t.completed ? <s>{t.name}</s> : t.name;
            return <li>{todoDisplay} <input type="checkbox" checked={t.completed} onChange={(_) => toggleTodoCompleted(t.id)}/></li>
          })}
          </ul>
        </content>
      </div>
    );
  }
}

export default App;
