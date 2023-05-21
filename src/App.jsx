import { useState } from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import TodoList from './TodoList';
import NavBar from './NavBar';

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      {/* remove default styles */}
      <TodoList />
    </>
  );
}

export default App;
