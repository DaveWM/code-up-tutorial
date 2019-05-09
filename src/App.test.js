import React from 'react';
import ReactDOM from 'react-dom';
import {App, toggleTodoCompleted, addTodo, changeTodoName} from './App';


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

describe('adding a new todo', () => {
  it('should add a new todo', () => {
    const state = {
      todos: {
        1: {
          id: 1,
          name: "Test Todo",
          completed: false
        }
      }
    };
    const updatedState = addTodo(state);
    expect(updatedState.todos).toEqual({
      1: {
        id: 1,
        name: "Test Todo",
        completed: false
      },
      2: {
        id: 2,
        name: "New Todo",
        completed: false
      }
    })
  })
});

describe("changing a todo's name", () => {
  it('should update the name to the new name', () => {
    const state = {
      todos: {
        1: {
          id: 1,
          name: "Old name",
          completed: false
        }
      }
    };
    const updatedState = changeTodoName(state, 1, "New name");
    expect(updatedState.todos[1].name).toEqual("New name");
  });
})
