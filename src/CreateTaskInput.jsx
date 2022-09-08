import React, { Component } from 'react';

class CreateTaskInput extends Component {

state = {
    text: ''
}
handleClick = this.props.handleClick
handleInput = event => {
    this.setState({ 
        text: event.target.value
    })
    console.log(this.state)
}
    render() {
        return (
            <div className="create-task">
            <input className="create-task__input" onChange = {this.handleInput} type="text" value={this.state.text} />
            <button className="btn create-task__btn" onClick={()=> this.handleClick(this.state.text)} >Create</button>
          </div>
        );
    }
}

export default CreateTaskInput;