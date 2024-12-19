import React from 'react';
import Button from './Button';

const TaskList = ({ tasks, onRemoveTask, onEditTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <div className='container-button'>
            <Button label="Modifier" onClick={() => onEditTask(index)} />
            <Button label="Supprimer" onClick={() => onRemoveTask(index)} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
