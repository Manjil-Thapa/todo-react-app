import { ListItem, TextField, InputAdornment, IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { useState } from 'react';

export default function TodoForm({ addTask }) {
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
          label='Add a new task'
          placeholder='e.g. Pick up birthday present'
          variant='outlined'
          onChange={handleChange}
          value={task}
          sx={{ display: 'flex', padding: 'none' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton aria-label='create a task' edge='end' type='submit'>
                  <AddOutlined />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}
