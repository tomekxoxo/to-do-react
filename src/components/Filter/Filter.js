import React from 'react';
import styling from './Filter.module.css';

const Filter = props => {
  return (
    <div className={styling.Filter}>
      <input type="checkbox" onClick={props.ifDone}/>
      <p>hide completed</p>
      <button onClick={props.clearList}><i className="fas fa-trash"></i></button>
    </div>
  );
};

export default Filter;