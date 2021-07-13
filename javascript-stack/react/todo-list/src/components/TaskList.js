import React, { useState, useEffect } from 'react';
import Task from './Task';

const taskList = [
  { value: 'Task #1', checked: false },
  { value: 'Task #2', checked: true },
  { value: 'Task #3', checked: false },
];

const TaskList = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (notEmpty()) {
      setTasks([...tasks, { value: input, checked: false }]);
      setInput('');
    }
  };

  const removeTask = (i) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(i, 1); // remove 1 item at i
    setTasks([...updatedTasks]);
  };

  const notEmpty = () => {
    if (input === '') {
      setErrorMessage('Task Required');
      return false;
    } else {
      setErrorMessage('');
      return true;
    }
  };

  useEffect(() => {
    console.log('useEffect');
    setTasks([...taskList]);
  }, []);

  const changeStatus = (id) => {
    tasks[id].checked = !tasks[id].checked;
    setTasks([...tasks]);
  };

  const taskInput = () => {
    return (
      <form className="ui form" onSubmit={addTask}>
        <label>Task</label>
        <div style={{ display: 'flex' }} className="field">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="ui button primary">Add</button>
        </div>
        <p style={{ color: 'red' }}>{errorMessage}</p>
      </form>
    );
  };

  const renderedTasks = tasks.map((task, id) => {
    return (
      <Task
        key={id}
        id={id}
        label={task.value}
        checked={task.checked}
        changeStatus={changeStatus}
        removeTask={removeTask}
      />
    );
  });

  return (
    <div>
      {taskInput()}
      {renderedTasks}
    </div>
  );
};

export default TaskList;
