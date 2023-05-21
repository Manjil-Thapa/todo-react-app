import List from '@mui/material/List';
import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

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
      return [...prevTodos, { id: 10, task: task, completed: false }];
    });
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map(todo => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            removeItem={removeTask}
            toggleItem={toggleTask}
          />
        );
      })}
      <TodoForm addTask={addTask} />
    </List>
  );
}

export default TodoList;
