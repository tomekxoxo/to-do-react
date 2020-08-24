import React from 'react';
import Task from './Task/Task';
import styling from './ToDoList.module.css';

const ToDoList = props => {

  const tasks = props.tasks.map((task, index) => {
    if (props.ifHide && task.done) {
      return null;
    }
    else {
      return <Task task={task.taskName} key={index} check={props.check} done={task.done}/>
    }
    
  });
  return (
    <div className={styling.ToDo}>
      {tasks}
    </div>
  );
};

export default ToDoList;