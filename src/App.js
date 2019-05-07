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
    const toggleTodoCompleted = (id) => {
      const updatedTodos = this.state.todos.map(t => 
        t.id === id ? {...t, completed: !t.completed} : t
      );
      this.setState({
        todos: updatedTodos
      });
    }

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
            return <li>{todoDisplay} <input type="checkbox" checked={t.completed} onChange={(_) => toggleTodoCompleted(t.id)}/></li>
          })}
          </ul>
        </content>
      </div>
    );
  }
}

export default App;
