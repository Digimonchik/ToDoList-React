import React, { Component } from 'react';
import CreateTaskInput from './CreateTaskInput';
import Task from './Task';

const baseUrl = 'https://61e1672f63f8fc0017618b99.mockapi.io/api/v1/tasks'

class TasksList extends Component {
state = {
    tasks: []

}
componentDidMount() {
    this.fetchTasksList()
}


    fetchTasksList = () => {

        fetch(baseUrl).then(response => {
            if(response.ok) {
                return response.json()
            }
        }).then(tasksList => {
            this.setState({
                tasks:tasksList
            })
        })
    }

postTask = () => {
    fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      })
}
deleteTask = (taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  });



  updateTask = (taskId, updatedTaskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTaskData),
  });

onCreate = text => { 

    const newTask = {
        text: text, 
        done: false,
    }

    fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      }).then(response => {
        if (response.ok) {
            this.fetchTasksList()
        }
        else {
            throw new Error('Failed to create task')
        }

    })
}


handleTaskStatusChange = id => {
    
    const currentTask = this.state.tasks.find(task => task.id === id)
    console.log(currentTask)
    const newTask = {
        ...currentTask,
        done: !currentTask.done
    }

    this.updateTask(id, newTask).then(response => {
        if (response.ok) {
            this.fetchTasksList()
        }
        else {
            throw new Error('Failed to create task')
        }
    })
    

    // const updatedTasks = this.state.tasks.map(task => {
    //     if(task.id === id) {
    //         return {
    //             ...task,
    //             done: !task.done
    //         }
    //     }
    //     return task
    // })
    // this.setState({
    //     tasks: updatedTasks
    // })

}

handleDelete = id => {
    this.deleteTask(id).then(response => {
        if (response.ok) {
            this.fetchTasksList()
        }
        else {
            throw new Error('Failed to create task')
        }
    })
}
    render() {
    const sortedList = this.state.tasks.slice().sort((a,b) => a.done - b.done)
        return (
        <main className="todo-list">
            <CreateTaskInput handleClick = {this.onCreate}/>
                <ul className="list">
                    {sortedList.map(task => <Task onStatusChange = {this.handleTaskStatusChange} key = {task.id} text = {task.text}done = {task.done} id = {task.id} onDelete = {this.handleDelete} />)}
                </ul> 
        </main>
            
        );
    }
}

export default TasksList;