import React from 'react';
import styling from './NewTask.module.css';

const NewTask = props => {


  return (
    <div className={styling.NewTask}>
      <input type="text" onChange={(e) => props.inputChange(e)} placeholder="Add new task..." value={props.inputValue}/>
      <button onClick={props.addTask}><i className="fas fa-plus-circle"></i></button>
    </div>
  );
};

export default NewTask;