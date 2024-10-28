import React, { useState } from 'react';
import Task from './task';
import TaskForm from './taskform';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

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

  const incompleteCount = tasks.filter(task => !task.completed).length;

  return (
    <div className="container">
      <h1>Day Planner</h1>
              <TaskForm addTask={addTask} />
      <h2>{incompleteCount} tasks remaining</h2>
      <ul>
        {tasks.map(task => (
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
