import React from 'react';

const TaskList = ({ tasks, onRemoveTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => onRemoveTask(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
