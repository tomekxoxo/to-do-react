import React, { Component } from 'react';
import styling from './Task.module.css';

class Task extends Component {

  state = {
    taskName: this.props.task,
    isDone: this.props.done
  }

  inputChangeHandler = (e) => {
    this.setState(prevState => {
      return {isDone: !prevState.isDone}
    })
  }

  render() {
    let ifDone = {};
    if (this.props.done === true) {
      ifDone = { textDecoration: 'line-through' }
    }
    return (
      <div className={styling.Task}>
        <input type="checkbox" checked={this.state.isDone} onChange={this.inputChangeHandler} onClick={()=>this.props.check(this.state.taskName)}/>
        <p style={ifDone}>{this.props.task}</p>
      </div>
    );
  }
};

export default Task;