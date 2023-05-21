import { useState } from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import TodoList from './TodoList';

function App() {
  return (
    <>
      <CssBaseline />
      {/* remove default styles */}
      <h1>Todos</h1>
      <TodoList />
    </>
  );
}

export default App;
