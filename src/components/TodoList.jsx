import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem('todos'));
  if (!data) return [];
  return data;
};

function TodoList() {
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

  const toggleTask = id => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const addTask = task => {
    setTodos(prevTodos => {
      return [
        ...prevTodos,
        { id: crypto.randomUUID(), task: task, completed: false },
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
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <TodoForm addTask={addTask} />
        {todos.map(todo => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              removeItem={removeTask}
              toggleItem={toggleTask}
              editItem={editTask}
            />
          );
        })}
      </List>
    </Box>
  );
}

export default TodoList;
