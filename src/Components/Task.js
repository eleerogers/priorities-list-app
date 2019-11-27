import React from 'react';

function Task(props) {
  const {task, level, removeTask, id} = props;
  const levels = ['Low', 'Medium', 'High']

  return (
    <div>
      <li>
        <div>{task}</div>
        <div>{levels[level]}</div>
        <button onClick={() => removeTask(id)}>X</button>
        <button>Edit</button>
      </li>
    </div>
  )
}

export default Task;