import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDeleteTask, onEditTask, onToggleComplete }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.text} task={task} onDeleteTask={onDeleteTask} onEditTask={onEditTask} onToggleComplete={onToggleComplete} />
      ))}
    </div>
  );
}

export default TaskList;
