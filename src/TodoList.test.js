import React from 'react';
import ReactDOM from 'react-dom';
import {TodoList} from './TodoList';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import { ListItem, TextField, ListItemText, Checkbox } from '@material-ui/core';

describe('TodoList component', () => {
    it('should render each todo', () => {
        const todos = {
            1: {
                name: "First todo",
                completed: false
            },
            2: {
                name: "Second todo",
                completed: true
            }
        };
        
        const rendered = shallow(<TodoList todos={todos}/>);

        expect(rendered.find(ListItem).length).toEqual(2);
        expect(rendered.find(TextField).at(0).prop('value')).toEqual('First todo');
        expect(rendered.find('s').at(0).text()).toContain('Second todo');
    });

    it('should fire the "toggle" event when a todo is toggled', () => {
        const todos = {
            1: {
                id: 1,
                name: "Test todo",
                completed: false
            }
        };
        const updateStateSpy = sinon.spy();

        const rendered = shallow(<TodoList todos={todos} dispatch={updateStateSpy}/>);

        rendered.find(Checkbox).simulate('change');

        expect(updateStateSpy.calledOnceWith({type: "toggle", id: 1})).toBe(true);
    });
})