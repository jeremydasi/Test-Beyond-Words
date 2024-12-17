import React from "react";
import Button from './Button';

const TaskList = ({ tasks, onRemoveTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <Button label="Supprimer" onClick={() => onRemoveTask(index)} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
