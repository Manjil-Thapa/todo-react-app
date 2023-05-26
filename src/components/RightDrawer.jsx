import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './RightDrawer.css';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function RightDrawer({ todo, editTask, toggleImportance }) {
  const [state, setState] = useState({
    right: false,
    taskTitle: todo.task,
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
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          paddingTop: '100px',
        }}
      >
        <TextField id='task' label={todo.task} />
        <TextField id='note' label='Add note' multiline minRows={5} />
        <Typography style={{ marginTop: 'auto' }}>
          Created on {todo.time}
        </Typography>
      </div>
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
