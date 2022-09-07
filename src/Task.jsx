import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
    render() {
        const style = this.props.done === true ? 'list-item list-item_done' : 'list-item'
        return (
            <li className = {style}>
                <input 
                type="checkbox" 
                className = "list-item__checkbox" 
                defaultChecked ={this.props.done}
                 />
        {this.props.text}
        <button className="list-item__delete-btn"></button>
            </li>
        );
    }
}

Task.propTypes = {

};

export default Task;