import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './RightDrawer.css';
import TextField from '@mui/material/TextField';

export default function RightDrawer({ todo, editTask }) {
  const [state, setState] = useState({
    right: false,
    taskTitle: '',
    taskDescription: '',
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleInputChange = event => {
    event.stopPropagation();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    setState({
      ...state,
      taskTitle: '',
      taskDescription: '',
      right: false,
    });
  };

  const list = anchor => (
    <Box sx={{ width: 350 }} role='presentation'>
      <form
        onClick={event => event.stopPropagation()} // Add event handler to stop event propagation
        onSubmit={handleFormSubmit}
        className='edit-form'
      >
        <label>
          Task Title:
          <input
            type='text'
            name='taskTitle'
            value={state.taskTitle}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Task Description:
          <textarea
            name='taskDescription'
            value={state.taskDescription}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <Button type='submit'>Update Task</Button>
        <h4>Created on May 26</h4>
        <TextField id='filled-basic' label='Task Title' variant='filled' />
      </form>
    </Box>
  );

  return (
    <Box>
      <IconButton
        edge='end'
        aria-label='edit'
        onClick={toggleDrawer('right', true)}
      >
        <EditIcon />
      </IconButton>
      <Drawer
        anchor='right'
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </Box>
  );
}
