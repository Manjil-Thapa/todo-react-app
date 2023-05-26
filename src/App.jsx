import { CssBaseline } from '@mui/material';
import TodoList from './components/TodoList';
import MainDrawer from './components/MainDrawer';
import Box from '@mui/material/Box';
import TodoForm from './components/TodoForm';
import './App.css';

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
