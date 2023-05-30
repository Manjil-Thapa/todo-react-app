import { Box, Divider, Typography, List } from '@mui/material';
import { useState, useEffect } from 'react';
import React from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem('todos'));
  if (!data) return [];
  return data;
};

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  const [error, setError] = useState(false);

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
    if (task.trim() === '') {
      return setError(true);
    }
    setTodos(prevTodos => {
      return [
        ...prevTodos,
        {
          id: crypto.randomUUID(),
          task: task,
          completed: false,
          isImportant: false,
          dateCreated: new Date().toDateString().slice(3),
          note: '',
          due: null,
        },
      ];
    });
  };

  const editTask = updatedTask => {
    setTodos(prevTodos =>
      prevTodos.map(todoItem =>
        todoItem.id === updatedTask.id ? updatedTask : todoItem
      )
    );
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
      <List sx={{ width: '100%', minWidth: 600, bgcolor: 'background.paper' }}>
        <Divider />
        {todos.map(todo => {
          return (
            <React.Fragment key={todo.id}>
              <TodoItem
                todo={todo}
                removeItem={removeTask}
                toggleCheck={toggleCheck}
                editItem={editTask}
                toggleImportance={toggleImportance}
              />
              <Divider />
            </React.Fragment>
          );
        })}
      </List>
      <TodoForm addTask={addTask} />
    </Box>
  );
}
