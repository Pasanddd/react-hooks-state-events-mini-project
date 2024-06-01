import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[1]);

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText('');
    setCategory(categories[1]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task details"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories
          .filter((category) => category !== 'All')
          .map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
