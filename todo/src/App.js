import React from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
     <Todo />
     <TodoForm />
    </div>
  );
}

export default App;
