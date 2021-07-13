import React, { useState, useEffect } from 'react';
import Task from './Task';
import TaskList from './TaskList';

const App = () => {
  return (
    <div className="ui container segment">
      <TaskList />
    </div>
  );
};

export default App;
