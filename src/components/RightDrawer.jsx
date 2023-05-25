import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function RightDrawer() {
  const [state, setState] = useState({
    right: true,
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
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <form onSubmit={handleFormSubmit}>
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
      </form>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}>Edit Task</Button>
      <Drawer
        anchor='right'
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </div>
  );
}
