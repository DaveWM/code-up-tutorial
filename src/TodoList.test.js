import React from 'react';
import ReactDOM from 'react-dom';
import {TodoList} from './TodoList';
import {shallow} from 'enzyme';
import sinon from 'sinon';

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
        expect(rendered.find('li').length).toEqual(2);
        expect(rendered.find('li input').at(0).prop('value')).toEqual('First todo');
        expect(rendered.find('li').at(1).text()).toContain('Second todo');
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

        const rendered = shallow(<TodoList todos={todos} updateState={updateStateSpy}/>);

        rendered.find('li input[type="checkbox"]').simulate('change');

        expect(updateStateSpy.calledOnceWith({type: "toggle", id: 1})).toBe(true);
    });
})