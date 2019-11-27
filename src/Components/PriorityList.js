import React, {useState} from 'react';
import Task from './Task';
import NewTaskForm from './NewTaskForm'

function PriorityList() {
  const [tasks, setTasks] = useState([{task: "Walk the dog", level: 1}, {task: "Feed the Chicken", level: 0}, {task: "Rake the yard", level: 2}]);

  const addTask = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  }

  const taskList = tasks.map(taskObj => <Task task={taskObj.task} level={taskObj.level} />);

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
