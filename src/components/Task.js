import React from 'react';

function Task({ task, onDeleteTask, onEditTask, onToggleComplete }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <p>{task.category}</p>
      <button onClick={() => onDeleteTask(task)}>Delete</button>
    </div>
  );
}

export default Task;
