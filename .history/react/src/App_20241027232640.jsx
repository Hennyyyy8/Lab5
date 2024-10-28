import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all'); // New filter state

  const addTask = (task) => {
    const newTask = { id: Date.now(), text: task, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => 
    filterStatus === 'all' 
      ? true 
      : filterStatus === 'completed' 
        ? task.completed 
        : !task.completed
  );

  const incompleteCount = tasks.filter(task => !task.completed).length;

  return (
    <div className="container">
      <h1>Day Planner</h1>
      <TaskForm addTask={addTask} />
      <h2>{incompleteCount} tasks remaining</h2>

      {/* Filter Buttons */}
      <div>
        <button onClick={() => setFilterStatus('all')}>All</button>
        <button onClick={() => setFilterStatus('completed')}>Completed</button>
        <button onClick={() => setFilterStatus('pending')}>Pending</button>
      </div>

      <ul>
        {filteredTasks.map(task => (
          <Task 
            key={task.id} 
            task={task} 
            toggleComplete={toggleComplete} 
            deleteTask={deleteTask} 
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
