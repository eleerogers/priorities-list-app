import React from 'react';
import './Task.css';

function Task(props) {
  const {removeTask, updateTask, taskObj} = props;
  const {task, level, id} = taskObj;
  const levels = ['Low', 'Medium', 'High']

  return (
    <div>
      <li className="task">
        <div className="task-text">{task} - {levels[level]}</div>
        <button onClick={() => updateTask(taskObj)}>Edit</button>
        <button onClick={() => removeTask(id)}>X</button>
      </li>
    </div>
  )
}

export default Task;