import React from 'react';

function Task(props) {
  const {removeTask, updateTask, taskObj} = props;
  const {task, level, id} = taskObj;
  const levels = ['Low', 'Medium', 'High']

  return (
    <div>
      <li>
        <div>{task}</div>
        <div>{levels[level]}</div>
        <button onClick={() => removeTask(id)}>X</button>
        <button onClick={() => updateTask(taskObj)}>Edit</button>
      </li>
    </div>
  )
}

export default Task;