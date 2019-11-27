import React, {useState} from 'react';
import Task from './Task';
import NewTaskForm from './NewTaskForm'

function PriorityList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  }

  const removeTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }

  const taskList = tasks.map(
    taskObj => 
      <Task
        task={taskObj.task}
        level={taskObj.level}
        id={taskObj.id}
        key={taskObj.id}
        removeTask={removeTask}
      />
  );

  return (
    <div>
      <h1>Priority List</h1>
      <ul>
        {taskList}
      </ul>
      <NewTaskForm addTask={addTask} />
    </div>
  )
}

export default PriorityList;
