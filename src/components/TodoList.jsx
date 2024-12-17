import React, { useState } from "react";
import TaskInputModal from "./TaskInputModal";
import TaskList from "./TaskList";
import Button from './Button';

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
    <div className="todoList">
      <h1>Todo List</h1>
      <Button label="Ajouter une tâche" onClick={openModal} />
      <TaskList tasks={tasks} onRemoveTask={handleRemoveTask} />
      {isModalOpen && (
        <TaskInputModal onAddTask={handleAddTask} onClose={closeModal} />
      )}
    </div>
  );
};

export default TodoList;
