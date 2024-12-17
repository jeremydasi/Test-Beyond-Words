import React, { useState } from 'react';

const TaskInputModal = ({ onAddTask, onClose }) => {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task);
    setTask('');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add a New Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={handleInputChange}
            placeholder="Enter your task"
          />
          <button type="submit">Add Task</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskInputModal;
