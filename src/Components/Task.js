import React from 'react';

function Task(props) {
  const {task, level} = props;
  const levels = ['Low', 'Medium', 'High']

  return (
    <div>
      <li>
        <div>{task}</div>
        <div>{levels[level]}</div>
        <button>X</button>
        <button>Edit</button>
      </li>
    </div>
  )
}

export default Task;