import React, {useState, useEffect} from 'react';
import uuid from 'uuid/v4';
import './TaskForm.css';

function TaskForm({addTask, show, handleClose, taskObj, finishUpdate}){
  const [task, setTask] = useState('');
  const [level, setLevel] = useState(0);
  
  useEffect(() => {
    if (taskObj) {
      setTask(taskObj.task);
      setLevel(taskObj.level);
    }
  }, [taskObj])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskObj) {
      finishUpdate({task, level, id: taskObj.id})
    } else {
      addTask({task, level, id: uuid()});
    }
    setTask('');
    setLevel(0);
    handleClose();
  }

  const handleCancel = () => {
    setTask('');
    setLevel(0);
    handleClose();
  }

  const showOrHideClass = show ? "modal display-block" : "modal display-none";
  const addOrEdit = taskObj ? "Edit Task" : "Add Task"

  return(
    <div className={showOrHideClass}>
      <div className="modal-main">
        <form onSubmit={handleSubmit}>
          <label htmlFor='task'>{addOrEdit}: </label>
          <input
            type='text'
            placeholder='New Task'
            id='task'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <label htmlFor='level'>Priority Level: </label>
          <select
            id='level'
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value={0}>Low</option>
            <option value={1}>Medium</option>
            <option value={2}>High</option>
          </select>
          <button className="addOrEditBtn">{addOrEdit}</button>
        </form>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default TaskForm;