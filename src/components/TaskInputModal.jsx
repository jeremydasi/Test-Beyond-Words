import React, { useState } from "react";
import Button from "./Button";

const TaskInputModal = ({ onSaveTask, onClose, initialTask }) => {
  const [task, setTask] = useState(initialTask || "");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveTask(task);
    setTask("");
  };

  return (
    <div className="containerModal">
      <div className="modal">
        <h2>{initialTask ? "Modifier" : "Ajouter une nouvelle tâche"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={handleInputChange}
            placeholder="Entrer votre tâche"
          />
          <div className="container-button">
            <Button
              onClick={handleSubmit}
              label={initialTask ? "Modifier" : "Ajouter la tâche"}
            />
            <Button label="Annuler" type="button" onClick={onClose} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskInputModal;
