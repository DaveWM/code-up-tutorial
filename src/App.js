import React from 'react';
import './App.css';
import * as R from 'ramda';
import { TodoList } from './TodoList';
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import CssBaseline from '@material-ui/core/CssBaseline'

export function toggleTodoCompleted(state, id) {
  return R.over(R.lensPath(["todos", id, "completed"]), R.not, state);
}

export function addTodo(state) {
  const newId = Math.max.apply(this, R.keys(state.todos)) + 1;
  return R.assocPath(["todos", newId], { id: newId, name: "New Todo", completed: false }, state);
}

export function changeTodoName(state, id, newName) {
  return R.assocPath(["todos", id, "name"], newName, state);
}

const initialState = {
  todos: {
    1: {
      id: 1,
      name: "A dummy todo",
      completed: false
    }
  }
};

export function handleEvent(state = initialState, event) {
  switch (event.type) {
    case "toggle":
      return toggleTodoCompleted(state, event.id);
    case "add":
      return addTodo(state);
    case "changeName":
      return changeTodoName(state, event.id, event.newName);
  }
  return state;
}

const store = createStore(
  handleEvent,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const ConnectedTodoList = connect(
  state => ({
    todos: state.todos
  })
)(TodoList);

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Provider store={store}>
        <ConnectedTodoList></ConnectedTodoList>
      </Provider>
    </React.Fragment>
  )
}

export default App;
