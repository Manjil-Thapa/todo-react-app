import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import RightDrawer from './RightDrawer';

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem('todos'));
  if (!data) return [];
  return data;
};

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const removeTask = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => {
        return todo.id !== id;
      });
    });
  };

  const toggleCheck = id => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };

  const toggleImportance = id => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, isImportant: !todo.isImportant };
        }
        return todo;
      });
    });
  };

  const addTask = task => {
    setTodos(prevTodos => {
      return [
        ...prevTodos,
        {
          id: crypto.randomUUID(),
          task: task,
          completed: false,
          isImportant: false,
        },
      ];
    });
  };

  const editTask = task => {
    console.log('Editing');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        m: 3,
      }}
    >
      <Typography
        variant='h1'
        component='h2'
        sx={{ flexGrow: 1, fontSize: 80 }}
      >
        All Tasks
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map(todo => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              removeItem={removeTask}
              toggleCheck={toggleCheck}
              editItem={editTask}
              toggleImportance={toggleImportance}
            />
          );
        })}
      </List>
      <Box sx={{ width: '100%', maxWidth: 360 }}>
        <TodoForm addTask={addTask} />
      </Box>
      <RightDrawer />
    </Box>
  );
}
