import React, { useState } from 'react';
import TaskInputModal from './TaskInputModal';
import TaskList from './TaskList';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = (task) => {
    if (task.trim()) {
      setTasks([...tasks, task]);
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <button onClick={openModal}>Add Task</button>
      <TaskList tasks={tasks} onRemoveTask={handleRemoveTask} />
      {isModalOpen && (
        <TaskInputModal onAddTask={handleAddTask} onClose={closeModal} />
      )}
    </div>
  );
};

export default TodoList;
