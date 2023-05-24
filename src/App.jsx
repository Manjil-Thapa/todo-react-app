import { useState } from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import TodoList from './components/TodoList';
import MainDrawer from './components/LeftDrawer';

export default function App() {
  return (
    <>
      <CssBaseline />
      <MainDrawer />
      <TodoList />
    </>
  );
}
