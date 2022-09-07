import React, { Component } from 'react';
import Task from './Task';

class TasksList extends Component {
    render() {
        
        return (
            
                <ul className="list">
                    {this.props.tasksList.map(task => <Task key = {task.id} text = {task.text}done = {task.done} />)}
                </ul>
            
        );
    }
}

export default TasksList;