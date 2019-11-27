import React, {useState} from 'react';
import Task from './Task';
import TaskForm from './TaskForm'

function PriorityList() {
  const [tasks, setTasks] = useState([]);
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  }

  const removeTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }

  const updateTask = (taskObj) => {
    setTaskToEdit(taskObj);
    setShowNewTaskModal(true);
  }

  const finishUpdate = (taskObj) => {
    setTasks(
      prevTasks => prevTasks.map(
        task => {
          if (task.id === taskObj.id) {
            return taskObj
          } else {
            return task
          }
        }
      )
    )
  }

  const showModal = () => {
    setShowNewTaskModal(true);
  }

  const hideModal = () => {
    setShowNewTaskModal(false);
  }

  const sortTasks = () => {
    setTasks(prevTasks => [].concat(prevTasks).sort((a, b) => b.level - a.level));
  }

  const taskList = tasks.map(
    taskObj => 
      <Task
        taskObj={taskObj}
        key={taskObj.id}
        removeTask={removeTask}
        updateTask={updateTask}
      />
  );

  return (
    <div>
      <h1>Priority List</h1>
      <ul>
        {taskList}
      </ul>
      <button onClick={showModal}>Add Task</button>
      <TaskForm
        addTask={addTask}
        show={showNewTaskModal}
        handleClose={hideModal}
        taskObj={taskToEdit}
        finishUpdate={finishUpdate}
      />
      <button onClick={sortTasks}>Sort by Priority</button>
    </div>
  )
}

export default PriorityList;
