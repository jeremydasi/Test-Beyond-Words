import React, { useState } from "react";
import Button from "./Button";

const TaskInputModal = ({ onAddTask, onClose }) => {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task);
    setTask("");
    onClose();
  };

  return (
    <div className="containerModal">
      <div className="modal">
        <h2>Add a New Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={handleInputChange}
            placeholder="Enter your task"
          />
          <div className="container-button">
            <Button label="Ajouter la tâche" type="submit" />
            <Button label="Annuler" type="button" onClick={onClose} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskInputModal;
