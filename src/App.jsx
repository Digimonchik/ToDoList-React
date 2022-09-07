import React, { Component } from 'react';
import TodoList from './TodoList';


const tasksList = [
  {
      id: 2, text: 'help', done: true
    },
    { id: 1, text: 'i need help', done: false}
  ]

export default class App extends Component {
    render(

    ) {

    return (    
      <div>
         <h1 className="title">Todo List</h1>
        <TodoList tasksList = {tasksList}>

        </TodoList>
    </div>
    );
  }
}
