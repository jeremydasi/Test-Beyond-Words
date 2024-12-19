import React, { useState } from 'react';
import TaskInputModal from './TaskInputModal';
import TaskList from './TaskList';
import Button from './Button';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleAddTask = (task) => {
    if (task.trim()) {
      setTasks([...tasks, task]);
    }
  };

  const handleEditTask = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleEditButtonClick = (index) => {
    setTaskToEdit(index);
    openModal();
  };

  const handleSaveTask = (task) => {
    if (taskToEdit !== null) {
      handleEditTask(taskToEdit, task);
      setTaskToEdit(null);
    } else {
      handleAddTask(task);
    }
    closeModal();
  };

  return (
    <div className="todoList">
      <h1>Todo List</h1>
      <Button label="Ajouter une tâche" onClick={openModal} />
      <TaskList
        tasks={tasks}
        onRemoveTask={handleRemoveTask}
        onEditTask={handleEditButtonClick}
      />
      {isModalOpen && (
        <TaskInputModal
          onSaveTask={handleSaveTask}
          onClose={closeModal}
          initialTask={taskToEdit !== null ? tasks[taskToEdit] : ''}
        />
      )}
    </div>
  );
};

export default TodoList;
