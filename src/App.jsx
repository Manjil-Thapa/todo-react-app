import { CssBaseline } from '@mui/material';
import TodoList from './components/TodoList';
import MainDrawer from './components/MainDrawer';
import Box from '@mui/material/Box';
import './App.css';
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CssBaseline />
      <MainDrawer />
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        <TodoList />
      </Box>
    </Box>
  );
}
