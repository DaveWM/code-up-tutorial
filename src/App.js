import React from 'react';
import './App.css';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      todos: [{
        id: 1,
        name: "A dummy todo",
        completed: false
      }]
    }
  }

  render(){
    return (
      <div>
        <header>
          <h1>My Awesome Todo App</h1>
        </header>
        <content>
          <p>Welcome to my awesome todo app 🙌</p>
          <ul>
          {this.state.todos.map(t => {
            const todoDisplay = t.completed ? <s>{t.name}</s> : t.name;
            return <li>{todoDisplay}</li>
          })}
          </ul>
        </content>
      </div>
    );
  }
}

export default App;
