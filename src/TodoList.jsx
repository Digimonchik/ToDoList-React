import React, { Component } from 'react';
import TasksList from './TasksList';


class TodoList extends Component {
    render() {
        return ( 
  <main className="todo-list">
    <div className="create-task">
      <input className="create-task__input" type="text" value="" />
      <button className="btn create-task__btn">Create</button>
    </div>
            <TasksList tasksList = {this.props.tasksList}/>
        </main>);
    }
}

export default TodoList;