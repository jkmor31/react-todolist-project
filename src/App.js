import './App.css';
import React from 'react';
import TodoList from './todos/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Today's Todo List: </h1>
      <hr />
      <br />
      <TodoList />
    </div>
  );
}

export default App;
