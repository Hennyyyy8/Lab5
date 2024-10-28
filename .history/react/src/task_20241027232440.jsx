import React from 'react';

const Task = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleComplete(task.id)} 
      />
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default Task;
