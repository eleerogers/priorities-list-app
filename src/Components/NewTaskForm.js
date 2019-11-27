import React, {useState} from 'react';

function NewTaskForm(props){
  const [task, setTask] = useState('');
  const [level, setLevel] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask({task, level});
    setTask('');
    setLevel(0)
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor='task'>New Task: </label>
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
      <button>Add Task</button>
    </form>
  )
}

export default NewTaskForm;