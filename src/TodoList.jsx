import List from '@mui/material/List';
import { useState } from 'react';
import TodoItem from './TodoItem';

const todoSeeds = [
  { id: 1, task: 'walk the dog', completed: true },
  { id: 2, task: 'exercise', completed: false },
  { id: 3, task: 'cook dinner', completed: false },
  { id: 4, task: 'water plants', completed: true },
];

function TodoList() {
  const [todos, setTodos] = useState(todoSeeds);

  const removeTask = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(task => {
        return task.id !== id;
      });
    });
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map(todo => {
        return <TodoItem todo={todo} key={todo.id} remove={removeTask} />;
      })}
    </List>
  );
}

export default TodoList;
