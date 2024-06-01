import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import { CATEGORIES } from '../data';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleDeleteTask(deletedTask) {
    setTasks(tasks.filter(task => task !== deletedTask));
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleEditTask(taskToEdit, newText) {
    setTasks(tasks.map(task => task === taskToEdit ? { ...task, text: newText } : task));
  }

  function handleToggleComplete(taskToToggle) {
    setTasks(tasks.map(task => task === taskToToggle ? { ...task, completed: !task.completed } : task));
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const filteredTasks = tasks.filter(task => selectedCategory === "All" || task.category === selectedCategory);

  return (
    <div className="container">
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} onToggleComplete={handleToggleComplete} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
    </div>
  );
}

export default App;
