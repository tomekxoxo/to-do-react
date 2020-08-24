import React from 'react';
import styling from './Filter.module.css';

const Filter = props => {
  return (
    <div className={styling.Filter}>
      <input type="checkbox" onClick={props.ifDone}/>
      <p>hide completed</p>
    </div>
  );
};

export default Filter;