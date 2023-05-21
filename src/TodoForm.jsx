import { ListItem, TextField, InputAdornment, IconButton } from '@mui/material';
import { Create } from '@mui/icons-material';
import { useState } from 'react';

function TodoForm({ addTask }) {
  const [task, setTask] = useState('');
  const handleChange = evt => {
    setTask(evt.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id='outlined-basic'
          label='Task'
          variant='outlined'
          onChange={handleChange}
          value={task}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton aria-label='create a task' edge='end' type='submit'>
                  <Create />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}

export default TodoForm;
