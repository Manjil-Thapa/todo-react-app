import { TextField, InputAdornment, IconButton, Box } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { useState } from 'react';

export default function TodoForm({ addTask, error }) {
  const [task, setTask] = useState('');

  const handleChange = event => {
    setTask(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <Box
      component='form'
      noValidate
      autoComplete='off'
      onChange={handleChange}
      onSubmit={handleSubmit}
      style={{ width: '100%' }}
    >
      <TextField
        id='addTask'
        label='Add a new task'
        placeholder='e.g. Pick up birthday present'
        variant='outlined'
        value={task}
        sx={{ display: 'flex', padding: 'none' }}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='create a task'
                edge='end'
                type='submit'
                onSubmit={handleSubmit}
              >
                <AddOutlined />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
