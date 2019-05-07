import React from 'react';
import ReactDOM from 'react-dom';
import {App, toggleTodoCompleted} from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('toggling a todo state', () => {
  it('should set the state to true when it is false', () => {
    const state = {
      todos: {
        1: {
          id: 1,
          name: "Test Todo",
          completed: false
        }
      }
    };
    const updatedState = toggleTodoCompleted(state, 1); 
    expect(updatedState.todos[1].completed).toBe(true);
  });

  it('should set the state to false when it is true', () => {
    const state = {
      todos: {
        1: {
          id: 1,
          name: "Test Todo",
          completed: true
        }
      }
    };
    const updatedState = toggleTodoCompleted(state, 1); 
    expect(updatedState.todos[1].completed).toBe(false);
  });
});
